import { useCart } from "../../hooks/useCart";
import { Icon } from "@iconify/react";
import "../../assets/styles/components/ui/CartCard.css"; 

const CartCard = ({ cartItems }) => {
  const { addToCart, quitarUnidadCart, quitarTodoCart } = useCart();

  return (
    <div className="card cart-card mb-3 mx-auto " style={{ maxWidth: "540px" }}>
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          <img
            src={cartItems.imagen}
            className="img-fluid product-card-img rounded-start"
            alt={cartItems.nombre}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <div className="d-flex flex-column">
              <h5 className="card-title">{cartItems.nombre}</h5>

              <p className="card-text">{cartItems.descripcion}</p>

              <p className="card-text">
                <small className="text-muted">
                  Precio: ${cartItems.precio} x {cartItems.quantity} unidades
                </small>
              </p>

              <p className="card-text fw-bold">
                Subtotal: ${(cartItems.precio * cartItems.quantity).toFixed(2)}
              </p>
            </div>

            <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-sm btn-success"
                onClick={() => addToCart(cartItems)}
              >
                +
              </button>

              <button
                className="btn btn-sm btn-warning"
                onClick={() => quitarUnidadCart(cartItems.id)}
              >
                -
              </button>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => quitarTodoCart(cartItems.id)}
              >
                <Icon icon="gridicons:trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;



