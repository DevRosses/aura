import { createContext, useState } from "react";
import {
  dispararSweetBasico,
  dispararSweetConfirmacion,
} from "../utils/SweetAlert";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        if (existingItem.quantity >= 3) {
          dispararSweetBasico(
            "info",
            "Límite alcanzado",
            "Solo puedes agregar hasta 3 unidades de este producto",
            "Entendido"
          );
          return prevItems;
        }

        dispararSweetBasico(
          "success",
          "Producto actualizado",
          `Se sumó una unidad de "${product.nombre}" al carrito`,
          "Genial"
        );

        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        dispararSweetBasico(
          "success",
          "Producto agregado",
          `"${product.nombre}" se agregó al carrito`,
          "Perfecto"
        );

        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const quitarUnidadCart = (productId) => {
    const producto = cartItems.find((item) => item.id === productId);
    if (producto) {
      dispararSweetBasico(
        "warning",
        "Unidad eliminada",
        `Se quitó una unidad de "${producto.nombre}"`,
        "OK"
      );
    }

    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const quitarTodoCart = async (productId) => {
    const producto = cartItems.find((item) => item.id === productId);
    if (!producto) return;

    const result = await dispararSweetConfirmacion();
    if (result.isConfirmed) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
      );

      dispararSweetBasico(
        "success",
        "Producto eliminado",
        `"${producto.nombre}" fue quitado del carrito`,
        "OK"
      );
    }
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  const value = {
    cartItems,
    addToCart,
    quitarUnidadCart,
    quitarTodoCart,
    cartCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
export { CartContext };
