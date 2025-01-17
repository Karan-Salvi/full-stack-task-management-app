import { useState } from "react";
import toast from "react-hot-toast";

const useDeleteMenuItem = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const deleteMenuItem = async (id) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/menu/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        toast.success(result.message);
      } else {
        toast.error(result.message || "Failed to delete menu item");
        setError(result.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.message);
      toast.error("An error occurred while deleting the menu item");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    successMessage,
    deleteMenuItem,
  };
};

export default useDeleteMenuItem;
