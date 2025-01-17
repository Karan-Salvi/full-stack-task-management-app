import { useState } from "react";
import toast from "react-hot-toast";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const signUp = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/register`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setUser(result.data);
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }

      localStorage.setItem("token", result.token);
    } catch (err) {
      setError(err.message);
      toast.error("Some error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    signUp,
  };
};

export default useSignUp;
