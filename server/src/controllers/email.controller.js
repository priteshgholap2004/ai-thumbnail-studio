import { sendEmail } from "../services/email.service.js";

export const testEmail = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        await sendEmail({
            to: email,
            subject: "AI Thumbnail Studio Test Email",
            html: `
                <h2>🎉 Email Service Working!</h2>
                <p>Your Resend integration is working correctly.</p>
                <p>This email was sent from your AI Thumbnail Studio backend.</p>
            `,
        });

        return res.status(200).json({
            success: true,
            message: "Email sent successfully.",
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};