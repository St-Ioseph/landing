import nodemailer from "nodemailer";
import dotenv from "dotenv";
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

export async function sendEmail({ email, name }) {
  // Simulación de envío de correo
  return new Promise((resolve) => {
    console.log('Simulando envío de correo...');
    console.log('Datos recibidos:', { email, name });

    setTimeout(() => {
      console.log('Correo simulado enviado exitosamente');
      resolve({ success: true });
    }, 2000);
  });

  /* Código real comentado para uso posterior
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
  */
}
