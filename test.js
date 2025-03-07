import { sendEmail } from "./src/lib/nodemailer.js";
import dotenv from "dotenv";
dotenv.config();


(async () => {
    const response = await sendEmail("test@example.com");
    console.log(response);
})();