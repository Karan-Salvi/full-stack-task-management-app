import React, { useEffect } from "react";
import Ordercard from "../../components/Ordercard";
import { useDispatch, useSelector } from "react-redux";
import useGetUserOrders from "../../hooks/useGetUserOrders";
import { orderActions } from "../../store/order";

const Order = () => {
  const user = useSelector((state) => state.user);
  const { orders, loading, error, getUserOrders } = useGetUserOrders(user._id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (orders) {
      dispatch(orderActions.addInitialOrder(orders));
    }
  }, [orders]);

  const order = useSelector((state) => state.order.order);

  return (
    <>
      {order.length > 0 ? (
        order.map((order) => <Ordercard key={order._id} order={order} />)
      ) : (
        <div className="text-center w-full height-screen flex justify-center items-start p-80">
          <p className="text-2xl font-bold poppins"> No orders</p>
        </div>
      )}
    </>
  );
};

export default Order;
