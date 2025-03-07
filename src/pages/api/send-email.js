import { sendEmail } from "../../lib/nodemailer";

export const prerender = false;

export async function POST({ request }) {
  try {
    const body = await request.json();
    console.log('Solicitud recibida:', body);
    const { email, name } = body;

    if (!email || !name) {
      return new Response(
        JSON.stringify({ success: false, error: "Faltan campos requeridos" }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const emailResponse = await sendEmail({ email, name });

    return new Response(
      JSON.stringify(emailResponse),
      {
        status: emailResponse.success ? 200 : 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error("Error al enviar correo:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
