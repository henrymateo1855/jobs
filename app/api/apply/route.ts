import envStore from "@/app/envStore/store";
import { capitalizeName } from "@/app/util";
import { createApplicant, updateApplicant } from "@/lib/db/applicantsRepo";
import { applicant } from "@/lib/db/schema";
import { acknowledgementEmail } from "@/lib/emails/applicationAcknowledgement";
import { sendMail } from "@/lib/mailer/mail";
import { uploadFile } from "@/lib/s3/uploadFile";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("resume") as File;

    if (!file) {
      return new Response(JSON.stringify({ message: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const application = await createApplicant({
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      dob: formData.get("dob") as string,
      location: formData.get("location") as string,
      device: formData.get("device") as string,
      internet: formData.get("internet") as string,
      availability: formData.get("availability") as string,
      experience: formData.get("experience") as string,
      note: formData.get("experience") as string,
    });

    // Save applicant in DB

    // Convert File -> Buffer -> Readable for S3

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await uploadFile(
      {
        name: `${application.firstName}_${application.lastName}.${
          file.type.split("/")[1]
        }`,
        type: file.type || "application/octet-stream",
        buffer,
      },
      `${application.firstName}_${application.lastName}`
    );

    const { subject, text, html } = acknowledgementEmail(application.firstName);
    const from = `${capitalizeName("Apex Group")} <${envStore.SMTP_USER}>`;
    const mail = await sendMail({
      to: application.email,
      subject,
      from,
      html,
      text,
    });

    return new Response(
      JSON.stringify({
        message: "Job placement successful",
        s3Url: "result.url",
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: `Error uploading file: ${error.message}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
