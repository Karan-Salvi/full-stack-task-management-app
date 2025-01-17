import React, { useEffect } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import useFetchMenu from "../hooks/useFetchMenu";
import { menuActions } from "../store/menuSlice";

const Ordercard = ({ order }) => {
  const { _id, userId, items, totalAmount, status, createdAt } = order;
  

  let { menu, loading, error } = useFetchMenu(
    `${import.meta.env.VITE_API_URL}/api/v1/menu`
  );

  const menus = useSelector((state) => state.menu.menu);

  const dispatch = useDispatch();

  useEffect(() => {
    if (menu.length > 0) {
      dispatch(menuActions.setInitialMenu(menu));
    }
  }, [menu, dispatch]);

  const matchingMenuItems = items
    .map((order) => {
      return menus.find((item) => item._id === order.menuItemId);
    })
    .filter((item) => item !== undefined);

 
  return (
    <>
      <div
        key={_id}
        className="bg-white shadow-md rounded-lg overflow-hidden w-10/12 mx-auto mt-3"
      >
        <div
          className="px-6 py-4 cursor-pointer flex justify-between items-center"
          onClick={() => toggleOrderExpansion(order._id)}
        >
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Order #{_id}
            </h2>
            <p className="text-sm text-gray-600">
              {format(createdAt, "MMMM d, yyyy h:mm a")}
            </p>
          </div>
          <div className="flex items-center">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium mr-4 ${
                status === "Completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {status}
            </span>
            <span className="text-lg font-bold text-gray-800">
              ₹{totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
        {/* expandedOrderId === order._id */}
        {true && (
          <div className="px-6 py-4 border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {matchingMenuItems &&
                matchingMenuItems.map((item) => (
                  <li key={item._id} className="py-3 flex justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-gray-800">
                      ${item.price.toFixed(2)}
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
