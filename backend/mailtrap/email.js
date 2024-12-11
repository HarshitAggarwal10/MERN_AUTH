import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [
    {
      email: "harshitaggarwal100306@gmail.com", // Ensure email is properly formatted
    },
  ];

  try {
    const response = await mailtrapClient.send({
      from: sender, // Sender details from configuration
      to: recipient, // Recipient email
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ), // Replace placeholder with actual token
      category: "Email Verification", // Optional: categorizing email
    });

    console.log("Email sent successfully", response);
    return response; // Return response for additional logging if needed
  } catch (error) {
    console.error("Error sending verification email:", error.message);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async(email, name) => {
    const recipient = [
        {
          email: "harshitaggarwal100306@gmail.com", 
        },
      ];

      try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "3453d7ca-ee6e-4536-a562-a324a8b1f215",
            template_variables: {
                company_info_name :"Secure Railway Management Site",
                name: name,
              },
        });

        console.log("Welcome Email sent successfully", response);
      }
      catch(error) {
        console.error(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error}`);
      }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [
    {
      email: "harshitaggarwal100306@gmail.com", 
    },
  ];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [
    {
      email: "harshitaggarwal100306@gmail.com", 
    },
  ];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		});

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};