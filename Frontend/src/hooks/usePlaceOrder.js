import { useState } from "react";
import toast from "react-hot-toast";

const usePlaceOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);

  const placeOrder = async (userId, items, totalAmount) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/v1/order", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, items, totalAmount }),
      });

      const result = await response.json();

      if (result.success) {
        setOrder(result.data);

        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      setError(err.message);
      toast.error("Some error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    order,
    loading,
    error,
    placeOrder,
  };
};

export default usePlaceOrder;
