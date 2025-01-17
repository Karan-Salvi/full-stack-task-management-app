import { useState } from "react";
import toast from "react-hot-toast";

const useCreateMenuItem = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const createMenuItem = async (menuData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("http://localhost:5000/api/v1/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menuData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message);
        toast.success(result.message);
       
      } else {
        toast.error(result.message || "Failed to create menu item");
        setError(result.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.message);
      toast.error("An error occurred while creating the menu item");
    } finally {
      setLoading(false);
    }
  };

  
  return {
    loading,
    error,
    successMessage,
    createMenuItem,
    
  };
};

export default useCreateMenuItem;
