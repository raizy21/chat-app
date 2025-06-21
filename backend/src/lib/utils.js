import { JWT_SECRET, NODE_ENV } from "../config/config.js";
import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //milliseconds
    httpOnly: true, //prevent xss attacks
    sameSite: "strict", //prevent csrf attacks
    secure: NODE_ENV !== "development", //use secure cookies in production
  });
  return token;
};
