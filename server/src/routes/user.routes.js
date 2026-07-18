import express from "express";
import { 
    registerUser,
    loginUser,
    logoutUser,
    getProfile,
    forgotPassword,
    resetPassword,
} from "../controllers/user.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

import { testEmail } from "../controllers/email.controller.js";

const router=express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

router.post("/logout",authMiddleware,logoutUser);

router.get("/profile",authMiddleware,getProfile);

router.post("/test-email", testEmail);

export default router;