import express from "express";
import dotenv from "dotenv";

import { connectMongoDB } from "./db/connectMongodb.js";
import authRouters from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();
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
