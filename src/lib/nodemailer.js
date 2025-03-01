import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(to, subject, html) {
  try {
    const info = await transporter.sendMail({
      from: `"Tu Nombre" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Correo enviado:", info.messageId);
    return { success: true, message: "Correo enviado exitosamente" };
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return { success: false, message: "Error al enviar el correo" };
  }
}