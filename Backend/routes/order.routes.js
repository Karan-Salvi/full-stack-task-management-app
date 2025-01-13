const express = require("express");
const {
  getUserOrders,
  placeOrder,
} = require("../controllers/order.controller");
const checkAuthenticated = require("../middlewares/auth");
const router = express.Router();

router.route("/order").get(getUserOrders).post(checkAuthenticated, placeOrder);

module.exports = router;
