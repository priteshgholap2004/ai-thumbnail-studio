import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import bcrypt from "bcrypt";

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