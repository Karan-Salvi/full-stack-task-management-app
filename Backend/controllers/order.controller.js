const Order = require("../models/order.model.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const { z } = require("zod");
const dotenv = require("dotenv");
dotenv.config({});

const getUserOrders = catchAsyncErrors(async (req, res) => {
  const orders = await Order.findOne({ userId: req.user._id });

  if (!orders) {
    return res.status(404).json({
      success: false,
      message: "Orders not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Orders fetched successfully",
    data: orders,
  });
});

const placeOrder = catchAsyncErrors(async (req, res) => {
  const { userId, items, totalAmount } = req.body;

  const order = await Order.create({
    userId,
    items,
    totalAmount,
  });

  if (!order) {
    return res.status(500).json({
      success: false,
      message: "Order not created something went wrong.",
    });
  }

  res.status(200).json({
    success: true,
    message: "Order Placed successfully",
    data: order,
  });
});

module.exports = {
  getUserOrders,
  placeOrder,
};
