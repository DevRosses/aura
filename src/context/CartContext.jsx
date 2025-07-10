import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Lógica para agregar productos (por ahora simple)
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const cartCount = cartItems.length;

      const value = { cartCount, addToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;