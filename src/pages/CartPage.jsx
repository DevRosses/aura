import CartCard from "../components/ui/CartCard";
import { useCart } from "../hooks/useCart.js";

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Estás a un paso de completar tu ritual.</h2>
      <p>Tienes {cartItems.length} productos en tu carrito.</p>

      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartCard cartItems={item} key={item.id} />)
      ) : (
        <h2>Carrito vacío</h2>
      )}
    </div>
  );
}

export default CartPage;
