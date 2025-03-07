import { sendEmail } from "../../lib/nodemailer";

export const prerender = false;

export async function POST({ request }) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Faltan datos" }), {
        status: 400,
      });
    }

    const emailResponse = await sendEmail(email);

    return new Response(JSON.stringify(emailResponse), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
    });
  }
};
