const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config({});
const userRoute = require("./routes/user.routes.js");
const menuRoute = require("./routes/menu.routes.js");
const orderRoute = require("./routes/order.routes.js");

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URI,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1", userRoute);
app.use("/api/v1", menuRoute);
app.use("/api/v1", orderRoute);

module.exports = app;
