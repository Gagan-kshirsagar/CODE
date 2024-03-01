import express from "express";
import mongoose from "mongoose";
import "express-async-errors";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";

//router

import jobRouter from "./routes/jobRouter.js";

import authRouter from "./routes/authRouter.js";

import userRouter from "./routes/userRouter.js";

//middleware

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

import { authenticateUser } from "./middleware/authMiddleware.js";

//Avatar Setup

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// Cloudinary
import cloudinary from "cloudinary";

dotenv.config();

const app = express();

import morgan from "morgan";

//Avatar
const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(express.static(path.resolve(__dirname, "./public")));

app.use(cookieParser());
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ msg: "test" });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/users", authenticateUser, userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use(errorHandlerMiddleware);

// const PORT = 5000

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => {
    console.log(`Server stated on port : ${process.env.PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
