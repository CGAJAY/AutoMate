import User from "../db/models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// Signup
export const signup = async (req, res) => {
	const { email, password, name } = req.body;

	try {
		const user = new User({ email, password, name });
		await user.save();
		res
			.status(201)
			.json({ message: "User created successfully" });
	} catch (err) {
		res.status(400).json({
			message: "Error creating user",
			error: err.message,
		});
	}
};

// Login
export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res
				.status(400)
				.json({ message: "Invalid credentials" });
		}

		const isMatch = await bcrypt.compare(
			password,
			user.password
		);
		if (!isMatch) {
			return res
				.status(400)
				.json({ message: "Invalid credentials" });
		}

		const token = jwt.sign(
			{ userId: user._id, role: user.role },
			process.env.JWT_SECRET,
			{
				expiresIn: "1h",
			}
		);

		res.json({
			token,
			user: { email: user.email, role: user.role },
		});
	} catch (err) {
		res.status(500).json({
			message: "Server error",
			error: err.message,
		});
	}
};

// Logout
export const logout = (req, res) => {
	res.json({ message: "Logged out successfully" });
};

// Check authentication
export const checkAuth = (req, res) => {
	res.json({ user: req.user });
};
