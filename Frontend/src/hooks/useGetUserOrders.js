import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetUserOrders = (userId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState(null);

  const getUserOrders = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/v1/orders`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (result.success) {
        setOrders(result.data);
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

  useEffect(() => {
    if (userId) {
      getUserOrders();
    }
  }, [userId]);

  return {
    orders,
    loading,
    error,
    getUserOrders,
  };
};

export default useGetUserOrders;
