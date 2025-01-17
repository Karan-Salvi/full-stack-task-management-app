import React from "react";
import { CiForkAndKnife } from "react-icons/ci";
import { FaMinusCircle, FaShoppingBag } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Cartcard = ({ cartItem }) => {
  const { name, price, quantity, category, menuItemId } = cartItem;
  const dispatch = useDispatch();
  const handleRemoveCart = (menuItemId) => {
    dispatch(cartActions.removeFromCart(menuItemId));
  };

  return (
    <>
      <div className="w-full h-44 border-2 rounded-md border-gray-200 overflow-hidden">
        <div className="w-full h-full flex justify-between items-start overflow-hidden">
          <img
            className="h-auto w-1/2 object-cover bg-no-repeat"
            src="./images/welcome.png"
            alt="category image"
          />
          <div className="flex flex-col w-1/2">
            <div className="w-full  border-b-2 flex justify-between items-center p-4  ">
              <h3 className="text-lg font-extrabold roboto">{name}</h3>
              <p class="w-fit bg-gray-100 text-gray-700 roboto text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                Available
              </p>
              <button
                className="text-lg text-gray-500"
                onClick={() => {
                  handleRemoveCart(menuItemId);
                }}
              >
                X
              </button>
            </div>
            <div className="w-full flex justify-between items-center gap-10 p-3">
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
                    //onClick={decreaseQuantity}
                    className="text-xl text-orange-500"
                  />
                </button>
                <p className="text-lg font-bold">{quantity}</p>
                <button
                  type="button"
                  //</div>onClick={increaseQuantity}
                  className=" m-3"
                >
                  <FaCirclePlus className="text-xl text-orange-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartcard;
