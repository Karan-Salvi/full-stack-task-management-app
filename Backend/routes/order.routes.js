const express = require("express");
const {
  getUserOrders,
  placeOrder,
} = require("../controllers/order.controller");
const checkAuthenticated = require("../middlewares/auth");
const router = express.Router();

router.route("/order").post(checkAuthenticated, placeOrder);

router.route("/orders").get(checkAuthenticated,getUserOrders)

module.exports = router;
