import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getProducts } from "../../services/productService";
import ProductCard from "../ui/ProductCard";

function UserFavoritesPage() {
  const { userProfile } = useAuth();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!userProfile?.favorites || userProfile.favorites.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const allProducts = await getProducts();
        const userFavs = allProducts.filter((product) =>
          userProfile.favorites.includes(product.id)
        );
        setFavoriteProducts(userFavs);
      } catch (error) {
        console.error("Error al cargar productos favoritos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [userProfile]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border"></div>
      </div>
    );
  }

  return (
    <div className="container-fluid mt-3 p-4">
      <h2 className="text-center">Tus Productos Favoritos</h2>

      {favoriteProducts.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 m-3">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="p-3 text-center">
          Aún no has agregado ningún producto a tus favoritos. ¡Explora nuestros
          productos y enamórate de ellos! ❤️
        </p>
      )}
    </div>
  );
}

export default UserFavoritesPage;
