import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import bcrypt from "bcrypt";

import crypto from "crypto";
import generateResetToken from "../utils/generateResetToken.js";
import { sendEmail } from "../services/email.service.js";

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }


        const user = await User.create({
            name,
            email,
            password,
        });

        const token = jwt.sign(
            {
                userId: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );

        res
            .cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })
            .status(201)
            .json({
                success: true,
                message: "User registered successfully",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    credits: user.credits,
                },
            });

        // res.status(201).json({
        // success:true,
        // message:"User Registration API Working ",
        // });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// ================= LOGIN =================

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        //find user
        const user = await User.findOne({ email });
        //email dont exist
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invallid email or password"
            });
        }

        //compaer password
        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        //generate token
        const token = jwt.sign(
            {
                userId: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        );

        //success
        // res.status(200).json({
        //     success:true,
        //     message:"login successfull",
        // });
        res
            .cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })
            .status(200)
            .json({
                success: true,
                message: "Login Successful",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    credits: user.credits,
                },
            });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }


};

//getprofile

import asyncHandler from "../utils/asyncHandler.js";

export const getProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(
        req.user.userId
    ).select("-password");

    if (!user) {
        throw new Error("User not found");
    }
    res.status(200).json({
        success: true,
        user,
    });
});

//logout

export const logoutUser = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
    })
        .status(200)
        .json({
            success: true,
            message: "Logged out successfully",
        });
};

//forgot password

export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        const user = await User.findOne({ email });

        // Prevent email enumeration
        if (!user) {
            return res.status(200).json({
                success: true,
                message:
                    "If an account with that email exists, a password reset link has been sent.",
            });
        }

        const { resetToken, hashedToken } = generateResetToken();

        user.resetPasswordToken = hashedToken;
        user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

        await user.save();

        const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

        try {
            await sendEmail({
                to: user.email,
                subject: "Reset Your Password",
                html: `
                    <h2>Reset Your Password</h2>

                    <p>Hello ${user.name},</p>

                    <p>Click the button below to reset your password.</p>

                    <p>
                        <a
                            href="${resetUrl}"
                            style="
                                display:inline-block;
                                padding:12px 24px;
                                background:#7c3aed;
                                color:white;
                                text-decoration:none;
                                border-radius:8px;
                                font-weight:bold;
                            "
                        >
                            Reset Password
                        </a>
                    </p>

                    <p>Or copy this link into your browser:</p>

                    <p>${resetUrl}</p>

                    <p>This link expires in <strong>15 minutes</strong>.</p>
                    <p>This link expires in 15 minutes.</p>
                `,
            });

        } catch (emailError) {
            console.error("❌ Resend Error:", emailError);

            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            return res.status(200).json({
                success: true,
                message:
                    "Password reset is fully implemented. In this demo version, emails can only be delivered to verified addresses because of Resend's development restrictions.",
            });
        }

        return res.status(200).json({
            success: true,
            message:
                "If an account with that email exists, a password reset link has been sent.",
        });

    } catch (error) {

        console.error("❌ Forgot Password Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//rest passeord

export const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password, confirmPassword } = req.body;

        if (!password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Please provide both password fields.",
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match.",
            });
        }

        // Hash the token from the URL
        const hashedToken = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");

        // Find user with valid token
        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired reset token.",
            });
        }

        // Hash new password
        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successful. You can now log in.",
        });

    } catch (error) {
        console.error("Reset Password Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};