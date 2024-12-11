import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN, // Ensure this key is correctly set in your .env file
  endpoint: "https://send.api.mailtrap.io", // Fixed endpoint for Mailtrap API
});

export const sender = {
  email: process.env.SENDER_EMAIL, // Add your verified Mailtrap sender email in .env
  name: process.env.SENDER_NAME || "Your App Name", // Optional sender name
};
