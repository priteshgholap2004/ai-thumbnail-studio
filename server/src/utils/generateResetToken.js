import crypto from "crypto";

const generateResetToken = () => {
    // Random token sent to the user
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Hashed token stored in the database
    const hashedToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    return {
        resetToken,
        hashedToken,
    };
};

export default generateResetToken;