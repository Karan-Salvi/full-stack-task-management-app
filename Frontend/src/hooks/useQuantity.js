import { useState } from "react";

const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 100) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return { quantity, increaseQuantity, decreaseQuantity, setQuantity };
};

export default useQuantity;
