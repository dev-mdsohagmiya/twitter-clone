import express from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("you hit the signup endpoint.");
});
router.post("/login", (req, res) => {
  res.send("you hit the signup endpoint.");
});

router.post("/logout", (req, res) => {
  res.send("you hit the signup endpoint.");
});

export default router;
