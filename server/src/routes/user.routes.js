import express from "express";
import { 
    registerUser,
    loginUser,
    logoutUser,
    getProfile,
} from "../controllers/user.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";

const router=express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

router.post("/logout",authMiddleware,logoutUser);

router.get("/profile",authMiddleware,getProfile);

export default router;