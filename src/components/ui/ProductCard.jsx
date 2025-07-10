import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="col">
      <div className="card text-center">
        <img
          src={product.imagen}
          className="card-img-top img-fluid product-card-img"
          alt={product.nombre}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.nombre}</h5>
          <p className="card-text">${product.precio}</p>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-sm btn-warning me-3"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
