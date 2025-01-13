const express = require("express");
const {
  getAllMenu,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menu.controller");
const router = express.Router();

router.route("/menu").get(getAllMenu).post(createMenuItem);

router.route("/menu/:id").put(updateMenuItem).delete(deleteMenuItem);

module.exports = router;
