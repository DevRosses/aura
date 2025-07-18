import CartCard from "../components/ui/CartCard";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import "../assets/styles/pages/CartPage.css"; 
import { dispararEnConstruccion } from "../utils/SweetAlert";


function CartPage() {
  const { cartItems, totalPrice } = useCart();
  
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
    <div className="container-fluid mt-5">
      <h2 className="text-center">Estás a un paso de completar tu ritual.</h2>
      <p className="text-center">
        Tienes {cartItems.length} productos en tu carrito.
      </p>

      {cartItems.map((item) => (
        <CartCard key={item.id} cartItems={item} />
      ))}

      <div className="mt-4 text-end">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
        <button
          className="btn btn-success mt-2"
          onClick={() => dispararEnConstruccion()}
          disabled={cartItems.length === 0}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}

export default CartPage;
