import express from 'express';
import { forgotPassword, login, logout, resetPassword, signup, verifyEmail, checkAuth } from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from auth routes");
});

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);



export default router;
