import CartCard from "../components/ui/CartCard";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function CartPage() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  if (!cartItems) {
    return <h2>Cargando...</h2>; // Solo si por alguna razón no llega el contexto
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center">
        <h2>Tu carrito está vacío.</h2>
        <p>Agrega productos a tu carrito para comenzar.</p>
        <button
          className="btn btn-warning mt-3"
          onClick={() => navigate(ROUTES.PRODUCTS)}
        >
          Ir a comprar
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Estás a un paso de completar tu ritual.</h2>
      <p>Tienes {cartItems.length} productos en tu carrito.</p>

      {cartItems.map((item) => (
        <CartCard key={item.id} cartItems={item} />
      ))}
    </div>
  );
}

export default CartPage;
