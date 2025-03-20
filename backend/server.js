import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import { connectMongoDB } from "./db/connectMongodb.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running...");
  connectMongoDB();
});
