import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
export { renderers } from '../../renderers.mjs';

dotenv.config();

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: false,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
	logger: true,
});

async function sendEmail({ email, name }) {
	// Código real para envío de correo
	try {
		const info = await transporter.sendMail({
			from: `"Ioseph Dev" <${process.env.SMTP_USER}>`,
			to: process.env.SMTP_USER,
			subject: `🔥 Nuevo contacto: ${name}`,
			html: `
        <h2>Nuevo registro de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
		});

		console.log("Correo aceptado por el servidor:", info.accepted);
		console.log("Correo rechazado por el servidor:", info.rejected);
		return { success: true };
	} catch (error) {
		console.error("Error SMTP:", error.message);
		return { success: false, error: error.message };
	}
}

const prerender = false;

async function POST({ request }) {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
