import { useCart } from "../../hooks/useCart";

const CartCard = ({ cartItems }) => {
  const { addToCart, quitarUnidadCart, quitarTodoCart } = useCart();

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={cartItems.imagen}
            className="img-fluid product-card-img rounded-start"
            alt={cartItems.nombre}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{cartItems.nombre}</h5>
              <p className="card-text">{cartItems.descripcion}</p>
              <p className="card-text">
                <small className="text-muted">
                  Precio: ${cartItems.precio} x {cartItems.quantity} unidades
                </small>
              </p>
            </div>

            <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-sm btn-success"
                onClick={() => addToCart(cartItems)}
              >
                +1
              </button>

              <button
                className="btn btn-sm btn-warning"
                onClick={() => quitarUnidadCart(cartItems.id)}
              >
                -1
              </button>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => quitarTodoCart(cartItems.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;



