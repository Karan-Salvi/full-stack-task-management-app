import React from "react";
import { format } from "date-fns";

const Ordercard = () => {
  let order = {
    _id: 1,
    createdAt: new Date(),
    status: "Processing",
    totalAmount: 50.0,
    orderItems: [
      {
        _id: 1,
        name: "Product 1",
        price: 10.0,
        quantity: 2,
      },
      {
        _id: 2,
        name: "Product 2",
        price: 20.0,
        quantity: 1,
      },
    ],
  };
  return (
    <>
      <div
        key={order._id}
        className="bg-white shadow-md rounded-lg overflow-hidden w-10/12 mx-auto mt-3"
      >
        <div
          className="px-6 py-4 cursor-pointer flex justify-between items-center"
          onClick={() => toggleOrderExpansion(order._id)}
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Order #{order._id}
            </h2>
            <p className="text-sm text-gray-600">
              {format(order.createdAt, "MMMM d, yyyy h:mm a")}
            </p>
          </div>
          <div className="flex items-center">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium mr-4 ${
                order.status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {order.status}
            </span>
            <span className="text-lg font-bold text-gray-800">
              ${order.totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
        {/* expandedOrderId === order._id */}
        {true && (
          <div className="px-6 py-4 border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {order.orderItems.map((item) => (
                <li key={item._id} className="py-3 flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Ordercard;
