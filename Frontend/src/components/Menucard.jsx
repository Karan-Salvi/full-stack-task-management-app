import React, { useState } from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinusCircle } from "react-icons/fa";
import useQuantity from "../hooks/useQuantity";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import CreateMenu from "./CreateMenu";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import useDeleteMenuItem from "../hooks/useDeleteMenuItem ";
import { menuActions } from "../store/menuSlice";

const Menucard = ({ item, handleId }) => {
  const { quantity, increaseQuantity, decreaseQuantity, setQuantity } =
    useQuantity();
  const { _id, name, category, price, availability } = item;

 

  const addToCart = () => {
    const item = {
      menuItemId: _id,
      name,
      price,
      quantity: quantity,
      category,
    };
    dispatch(cartActions.addToCart(item));
  };

  const { loading, error, successMessage, deleteMenuItem } =
    useDeleteMenuItem();

  const dispatch = useDispatch();

  const handleDelete = async () => {
    await deleteMenuItem(_id);

    dispatch(menuActions.removeMenuItem(_id));
  };

  return (
    <>
      <div class="max-w-72 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=" w-full h-44 overflow-hidden relative">
          <img
            class="rounded-t-lg w-full h-auto"
            src="./images/welcome.png"
            alt="Category image"
          />
          <div className="absolute top-2 right-3 flex gap-2">
            <button
              className="border-2 border-black rounded-lg flex justify-center items-center"
              onClick={handleDelete}
            >
              <MdDelete className="text-3xl text-white p-1" />
            </button>
            <button className="border-2 border-black rounded-lg flex justify-center items-center">
              <FaRegEdit
                className="text-3xl text-white border-black p-1"
                onClick={() => {
                  handleId(_id);
                }}
              />
            </button>
          </div>
        </div>

        <div class="p-1">
          <div className="w-full border-b-2 flex justify-between items-center p-2">
            <h3 className="text-lg font-extrabold roboto">{name}</h3>
            <p class="w-fit bg-gray-100 text-gray-700 roboto text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
              {availability ? "Available" : "Not Available"}
            </p>
          </div>
          <div className="w-full h-full flex  justify-between items-center gap-4 p-3">
            <div className="flex flex-col gap-3">
              <div className="w-full flex justify-start items-center gap-2">
                <CiForkAndKnife className="text-2xl text-gray-500" />
                <p className="text-xs text-orange-500 roboto font-semibold bg-orange-100 px-2 py-1">
                  {category}
                </p>
              </div>
              <div className="w-full flex justify-start items-center gap-2 ">
                <RiMoneyRupeeCircleLine className="text-2xl text-gray-500" />
                <p className="text-lg font-bold roboto ">{price}</p>
              </div>
            </div>

            <div className=" flex justify-center items-center">
              <button type="button" className=" m-3">
                <FaMinusCircle
                  onClick={decreaseQuantity}
                  className="text-xl text-orange-500"
                />
              </button>
              <p className="text-lg font-bold">{quantity}</p>
              <button type="button" onClick={increaseQuantity} className=" m-3">
                <FaCirclePlus className="text-xl text-orange-500" />
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={addToCart}
            className="text-white w-full h-auto bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-base roboto font-bold  px-5 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Menucard;
