export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    return new Response(
      JSON.stringify({
        message: "Job placement successful",
        status: 200,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({
        message: `Error uploading File ${error}`,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
