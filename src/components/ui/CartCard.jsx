import { useCart } from "../../hooks/useCart";
import { Icon } from "@iconify/react";
import "../../assets/styles/components/ui/CartCard.css";

const CartCard = ({ item }) => {
  const { addToCart, quitarUnidadCart, quitarTodoCart } = useCart();

  return (
    <div className="cart-item-card">
      <img
        src={item.imagen}
        className="cart-item-card__image"
        alt={item.nombre}
      />

      <div className="cart-item-card__info">
        <h3>{item.nombre}</h3>

        <p>{item.descripcion}</p>

        <p>
          Precio: ${item.precio} x {item.quantity} unidades
        </p>

        <p className="subtotal">
          Subtotal: ${(item.precio * item.quantity).toFixed(2)}
        </p>

        <div className="cart-item-card__actions">
          <button className="btn btn-primary" onClick={() => addToCart(item)}>
            +
          </button>

          <button
            className="btn btn-primary"
            onClick={() => quitarUnidadCart(item.id)}
          >
            -
          </button>

          <button
            className="btn btn-danger"
            onClick={() => quitarTodoCart(item.id)}
          >
            <Icon icon="mdi:trash-can-outline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
