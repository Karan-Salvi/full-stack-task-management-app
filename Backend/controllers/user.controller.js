const User = require("../models/user.model.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const { z } = require("zod");
const dotenv = require("dotenv");
const ms = require("ms");

dotenv.config({});

const register = catchAsyncErrors(async (req, res) => {
  const registerSchema = z.object({
    username: z.string().min(4).max(50),
    password: z.string().min(6),
  });

  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }
  const { username, password } = req.body;

 

  const user = await User.create({
    username,
    password,
  });

  if (!user) {
    return res.status(500).json({
      success: false,
      message: "User not created something went wrong.",
    });
  }

  return res.status(200).json({
    success: true,
    message: "User is registered successfully",
    data: user,
  });
});

const login = catchAsyncErrors(async (req, res) => {
  const { username, password } = req.body;

  const loginSchema = z.object({
    username: z.string().min(4).max(50),
    password: z.string().min(6),
  });

  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  const checkUser = await user.isPasswordCorrect(password);

  if (!checkUser) {
    return res.status(500).json({
      success: false,
      message: "Password is incorrect",
    });
  }

  const token = await user.generateRefreshToken();

  if (!token) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }

  const tokenExpiryMs = ms(process.env.REFRESH_TOKEN_EXPIRY || "7d");
  const expirationDate = new Date(Date.now() + tokenExpiryMs);

  return res
    .status(200)
    .cookie(process.env.TOKEN_NAME, token, {
      expires: expirationDate,
    })
    .json({
      success: true,
      message: "User is successfully logged in.",
      data: user,
      token: token,
    });
});

module.exports = {
  register,
  login,
};
