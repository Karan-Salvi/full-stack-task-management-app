import React, { useEffect } from "react";
import Cartcard from "../../components/Cartcard";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import usePlaceOrder from "../../hooks/usePlaceOrder";
import { orderActions } from "../../store/order";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cart);
  const user = useSelector((store) => store.user);
  const { order, loading, error, placeOrder } = usePlaceOrder();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const totalAmount = calculateTotalAmount(cartItems);

  const extractedFields = cartItems.map(({ menuItemId, quantity }) => ({
    menuItemId,
    quantity,
  }));

  const createOrder = async (event) => {
    event.preventDefault();
    let order = {
      userId: user._id,
      items: extractedFields,
      totalAmount: totalAmount,
    };

    await placeOrder(user._id, extractedFields, totalAmount);
    navigate("/order");
  };

  useEffect(() => {
    if (order) {
      dispatch(orderActions.addOrder(order));
    }
  }, [order]);

  return (
    <>
      {cartItems?.length !== 0 ? (
        <div className="w-full h-auto mx-auto flex flex-col bg-white gap-2 items-center lg:flex-row lg:items-start p-2 lg:pt-3 md:px-3 md:w-10/12 px-4 py-5 md:py-10">
          <div className="w-full h-auto flex flex-col items-center gap-2">
            <div
              className={`w-full h-full 
      flex flex-col items-center gap-2`}
            >
              {cartItems?.map((cartItem) => (
                <Cartcard cartItem={cartItem} key={cartItem._id} />
              ))}
            </div>
          </div>
          <div className="w-full h-auto bg-white p-2 border-t-2 md:border-t-0 md:border-l-2">
            <p className="flex justify-between">
              <p className="text-sm font-semibold py-4">
                PRICE DETAILS{" "}
                <span>{`(${cartItems ? cartItems?.length : 0} Items)`}</span>
              </p>
            </p>

            <div className="w-full h-auto flex flex-col items-center gap-2 ">
              <div className="w-full flex justify-between px-1">
                <p className="text-sm text-gray-500">Total MRP</p>
                <p className="text-sm text-black">₹{`${totalAmount * 1.2}`}</p>
              </div>

              <div className="w-full flex justify-between px-1">
                <p className="text-sm text-gray-500">Discount on MRP</p>
                <p className="text-sm text-green-600">
                  - ₹{`${totalAmount * 1.2 - totalAmount}`}
                </p>
              </div>

              <div className="w-full flex justify-between px-1">
                <p className="text-sm text-gray-500">Platform Fee</p>
                <p className="text-sm text-green-600">FREE</p>
              </div>

              <div className="w-full flex justify-between px-1">
                <p className="text-sm text-gray-500">Shipping Fee</p>
                <p className="text-sm text-green-600">
                  <span className="text-xs text-black line-through">₹79</span>
                  FREE
                </p>
              </div>

              <div className="w-full flex justify-between border-t-2 border-gray-400 px-1">
                <p className="text-sm text-gray-700 font-bold">Total Amount</p>
                <p className="text-sm text-green-600">₹{`${totalAmount}`}</p>
              </div>
            </div>

            {user.username !== "undefined" ? (
              <form
                onSubmit={createOrder}
                className={`flex justify-center items-center w-full py-3 `}
              >
                <button
                  type="submit"
                  className="w-full h-auto bg-orange-500 py-2 text-white rounded-lg hover:bg-orange-600 font-semibold roboto"
                >
                  Place Order
                </button>
              </form>
            ) : (
              <h1 className="text-center text-lg p-5 text-orange-600 font-bold poppins">
                Please Login to place the order
              </h1>
            )}
          </div>
        </div>
      ) : (
        <section className="w-full height-screen flex flex-col gap-10 justify-center items-center">
          <h1 className="text-5xl font-bold">Cart is empty</h1>
          <Link
            to={"/menu"}
            className="text-white w-60  bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-lg text-base roboto font-bold  px-5 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 inline-flex justify-center items-center gap-2"
          >
            <FaArrowLeft />
            Go to Menu
          </Link>
        </section>
      )}
    </>
  );
};

export default Cart;
