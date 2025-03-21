import express from "express";
import {
  getMe,
  login,
  logout,
  signup,
} from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";
const authRouters = express.Router();

authRouters.get("/me", protectRoute, getMe);
authRouters.post("/signup", signup);
authRouters.post("/login", login);
authRouters.post("/logout", logout);

export default authRouters;
