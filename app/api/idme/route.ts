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
    console.log(formData);
    console.log("formData");

    // const file = formData.get("resume") as File;

    // if (!file) {
    //   return new Response(JSON.stringify({ message: "No file provided" }), {
    //     status: 400,
    //     headers: { "Content-Type": "application/json" },
    //   });
    // }

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
