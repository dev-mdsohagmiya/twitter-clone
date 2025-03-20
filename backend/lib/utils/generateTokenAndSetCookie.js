import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (newUser, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent xss attack
    sameSite: "strict", // csrf attack
    secure: process.env.NODE_ENV !== development,
  });
};
