import express from "express";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { connectMongoDB } from "./db/connectMongodb.js";
import authRouters from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
dotenv.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // to parge form data
app.use("/api/auth", authRouters);
app.use("/api/user", userRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running...");
  connectMongoDB();
});
