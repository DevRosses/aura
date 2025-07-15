import { useCart } from "../../hooks/useCart.js";
import { useAuth } from "../../hooks/useAuth.js";
import { toggleFavorite } from "../../services/userService.js";
import { Icon } from "@iconify/react";

// Añadimos un poco de CSS para el corazón
const favoriteIconStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
  fontSize: "1.8rem",
  cursor: "pointer",
  color: "white",
  filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.7))",
};

const ProductCard = ({ product, onFavoriteChange }) => {
  const { addToCart } = useCart();
  const { user, userProfile, setUserProfile } = useAuth(); // Usamos el perfil del usuario

  // Verificamos si el producto actual está en la lista de favoritos
  const isFavorite = userProfile?.favorites?.includes(product.id);

  const handleFavoriteClick = async () => {
    if (!user) {
      // Opcional: Avisar al usuario que necesita iniciar sesión
      return;
    }
    await toggleFavorite(user.uid, product.id);
    // Actualizamos el estado local para que el cambio se vea al instante
    const updatedFavorites = isFavorite
      ? userProfile.favorites.filter((id) => id !== product.id)
      : [...(userProfile.favorites || []), product.id];

    setUserProfile({ ...userProfile, favorites: updatedFavorites });

    if (onFavoriteChange) {
      onFavoriteChange(product.id);
    }
  };

  return (
    <div className="col">
      <div className="card text-center h-100 position-relative">
        {/* Solo mostramos el corazón si el usuario está logueado */}
        {user && (
          <div
            onClick={handleFavoriteClick}
            style={favoriteIconStyle}
            title="Agregar a favoritos"
          >
            <Icon
              icon={isFavorite ? "mdi:heart" : "mdi:heart-outline"}
              style={{ color: isFavorite ? "red" : "white" }}
            />
          </div>
        )}

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
            className="btn btn-sm btn-warning mt-auto"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
