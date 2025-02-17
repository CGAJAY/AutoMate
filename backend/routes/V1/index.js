import express from "express";
import authRouter from "./auth.js";
import songRouter from "./song.js";

// Create v1 router
const v1Router = express.Router();

// Auth routes
v1Router.use("/auth", authRouter);

export default v1Router;
