import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { toggleFavorite } from "../../services/userService";
import { Icon } from "@iconify/react";
import "../../assets/styles/components/ui/ProductCard.css";

const ProductCard = ({ product, onFavoriteChange }) => {
  const { addToCart } = useCart();
  const { user, userProfile, setUserProfile } = useAuth();

  const isFavorite = userProfile?.favorites?.includes(product.id);

  const handleFavoriteClick = async (e) => {
    e.stopPropagation(); 
    if (!user) return;

    await toggleFavorite(user.uid, product.id);

    const updatedFavorites = isFavorite
      ? userProfile.favorites.filter((id) => id !== product.id)
      : [...(userProfile.favorites || []), product.id];

    setUserProfile({ ...userProfile, favorites: updatedFavorites });

    if (onFavoriteChange) {
      onFavoriteChange(product.id);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="product-card__image"
        />

        {user && (
          <button
            className="product-card__wishlist-btn"
            onClick={handleFavoriteClick}
            title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            <Icon icon={isFavorite ? "mdi:heart" : "mdi:heart-outline"} />
          </button>
        )}
      </div>

      <div className="product-card__info">
        <h3 className="product-card__title">{product.nombre}</h3>
        <p className="product-card__price">${product.precio}</p>

        <button onClick={() => addToCart(product)} className="btn btn-primary">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
