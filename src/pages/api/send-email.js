import { sendEmail } from "../../lib/mailer";

export const POST = async ({ request }) => {
  try {
    const { to, subject, message } = await request.json();

    if (!to || !subject || !message) {
      return new Response(JSON.stringify({ error: "Faltan datos" }), {
        status: 400,
      });
    }

    const emailResponse = await sendEmail(to, subject, message);

    return new Response(JSON.stringify(emailResponse), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
    });
  }
};