

import { useCart } from "../../hooks/useCart";
import { Icon } from "@iconify/react";
import "../../assets/styles/components/ui/CartSummary.css";
import { dispararEnConstruccion} from "../../utils/SweetAlert";

const CartSummary = () => {
  const { cartItems } = useCart();



  // Calculamos el subtotal sumando el precio de cada item por su cantidad
  const subtotal = (cartItems || []).reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  // Puedes añadir lógica para el costo de envío aquí
  const shippingCost = subtotal > 50 ? 0 : 10; // Ejemplo: envío gratis para compras mayores a $50

  const total = subtotal + shippingCost;

  return (
    <div className="cart-summary">
      <h2>Resumen del Pedido</h2>

      <div className="cart-summary__row">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="cart-summary__row">
        <span>Costo de Envío</span>
        <span>
          {shippingCost === 0 ? "Gratis" : `$${shippingCost.toFixed(2)}`}
        </span>
      </div>

      <div className="cart-summary__row total">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button
        className="btn btn-primary btn-block"
        style={{ marginTop: "var(--spacing-lg)" }}
        onClick={() => dispararEnConstruccion()}
      >
        <Icon icon="mdi:shield-check-outline" /> Finalizar Compra
      </button>
    </div>
  );
};

export default CartSummary;
