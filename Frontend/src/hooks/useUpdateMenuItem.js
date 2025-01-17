import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateMenuItem = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const updateMenuItem = async (id, menuData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/menu/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(menuData),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        toast.success(result.message);
      } else {
        toast.error(result.message || "Failed to update menu item");
        setError(result.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.message);
      toast.error("An error occurred while updating the menu item");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    successMessage,
    updateMenuItem,
  };
};

export default useUpdateMenuItem;
