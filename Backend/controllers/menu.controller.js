const Menu = require("../models/menu.model.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const { z } = require("zod");
const dotenv = require("dotenv");
dotenv.config({});

const getAllMenu = catchAsyncErrors(async (req, res) => {
  const menu = await Menu.find();
  if (!menu) {
    return res.status(404).json({
      success: false,
      message: "Menu not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Menu fetched successfully",
    data: menu,
  });
});

const createMenuItem = catchAsyncErrors(async (req, res) => {
  const menuSchema = z.object({
    name: z.string().min(4).max(100),
    category: z
      .string()
      .refine(
        (value) =>
          [
            "appetizers",
            "main course",
            "side dishes",
            "desserts",
            "salads",
            "beverages",
            "soups",
            "grills",
            "vegetarian",
            "vegan",
            "seafood",
            "pasta",
            "burgers",
            "sandwiches",
            "pizza",
          ].includes(value),
        {
          message: "Invalid value",
        }
      ),
    price: z.number(),
  });

  const result = menuSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  const { name, category, price } = req.body;

  const menu = await Menu.create({
    name,
    category,
    price,
  });

  if (!menu) {
    return res.status(500).json({
      success: false,
      message: "Menu not created something went wrong.",
    });
  }

  res.status(200).json({
    success: true,
    message: "Menu created successfully",
    data: menu,
  });
});

const updateMenuItem = catchAsyncErrors(async (req, res) => {
  const menuSchema = z.object({
    name: z.string().min(4).max(100),
    category: z
      .string()
      .refine(
        (value) =>
          [
            "appetizers",
            "main course",
            "side dishes",
            "desserts",
            "salads",
            "beverages",
            "soups",
            "grills",
            "vegetarian",
            "vegan",
            "seafood",
            "pasta",
            "burgers",
            "sandwiches",
            "pizza",
          ].includes(value),
        {
          message: "Invalid value",
        }
      ),
    price: z.number(),
    availability: z.boolean(),
  });

  const result = menuSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  const { name, category, price, availability } = req.body;

  const id = req.params.id;

  const menu = await Menu.findByIdAndUpdate(
    id,
    {
      name,
      category,
      price,
      availability,
    },
    {
      new: true,
    }
  );

  if (!menu) {
    return res.status(404).json({
      success: false,
      message: "Menu not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Menu updated successfully",
    data: menu,
  });
});

const deleteMenuItem = catchAsyncErrors(async (req, res) => {
  const id = req.params.id;

  const menu = await Menu.findByIdAndDelete(id);

  if (!menu) {
    return res.status(404).json({
      success: false,
      message: "Menu not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Menu deleted successfully",
  });
});

module.exports = { getAllMenu, createMenuItem, updateMenuItem, deleteMenuItem };
