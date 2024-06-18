import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cardInfo, setcardInfo] = useState([]);

  const addToCart = (item) => {
    setcardInfo([...cardInfo, item]);
  };

  const removeFromCart = (item) => {
    setcardInfo(cardInfo.filter((apple) => apple !== item));
  };

  return (
    <CartContext.Provider value={{ cardInfo, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
 