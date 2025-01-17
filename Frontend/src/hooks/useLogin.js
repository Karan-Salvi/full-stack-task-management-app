import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/v1/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

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

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return {
    user,
    loading,
    error,
    login,
    logout,
  };
};

export default useLogin;
