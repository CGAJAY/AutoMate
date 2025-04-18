import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import v1Router from "./routes/V1/index.js";
import e from "express";

// Load environment variables from the .env file
dotenv.config();

const app = express(); // Create an Express application
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
};

// Middleware
app.use(cookieParser()); // Parse cookies
app.use(express.json()); // Parse JSON bodies
app.use(cors(corsOptions)); // Enable CORS

app.get("/", (req, res) => {    
    console.log("Request received on root path");
    res.json({ message: "Silence is golden" });
});

// api version 1 routes
app.use("/api/v1", v1Router);

// Catch-all route for undefined paths
app.use("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
});

export default app; // Export the app for use in other modules

