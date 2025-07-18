import CartCard from "../components/ui/CartCard";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import "../assets/styles/pages/CartPage.css"; 
import CartSummary from '../components/ui/CartSummary';


function CartPage() {
  const { cartItems } = useCart();
  
  const navigate = useNavigate();

  if (!cartItems) {
    return <h2>Cargando...</h2>;
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
    <div className="container cart-page">
      <h1>Estás a un paso de completar tu ritual.</h1>
      <p>Tienes {cartItems.length} productos en tu carrito.</p>

      <div className="cart-layout">
        {/* Columna de productos */}
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <CartCard key={item.id} item={item} />
          ))}
        </div>

        {/* Columna de resumen */}
        <div className="cart-summary-wrapper">
          <CartSummary/>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
