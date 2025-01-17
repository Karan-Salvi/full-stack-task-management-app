import { useState, useEffect } from "react";

const useFetchMenu = (apiUrl) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl); 
        if (!response.ok) {
          throw new Error("Failed to fetch menu");
        }
        const result = await response.json();
        setMenu(result.data);
      } catch (err) {
        setError(err.message || "Failed to fetch menu");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [apiUrl]);

  return { menu, loading, error };
};

export default useFetchMenu;
