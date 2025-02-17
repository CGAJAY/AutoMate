import express from "express";
import {
	login,
	signup,
	logout,
	checkAuth,
} from "../../controllers/auth.js";

// Create auth router
const authRouter = express.Router();

authRouter.get("/", (req, res) => {
	res.json({ message: "Auth route" });
});

// Public routes
authRouter.post("/signup", signup);
authRouter.post("/login", login);

// Protected routes
authRouter.get("/check-auth", authMiddleware, checkAuth);
authRouter.post("/logout", authMiddleware, logout);

export default authRouter;
