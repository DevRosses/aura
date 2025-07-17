import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ui/ProductCard";
import "../assets/styles/pages/ProductsPage.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productList = await getProducts();
        setProducts(productList);
        console.log("📦 Productos recibidos de Firestore:", productList);
      } catch (err) {
        setError(err);
        console.error("Error al cargar productos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="container text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <p className="container alert alert-danger">
        Error al cargar productos: {error.message}
      </p>
    );

  return (
    <section className="products-page">
      <div className="container">
        <div className="products-header">
          <h2>Cada producto tiene una intención: hidratar, proteger, sanar.</h2>
          <p>
            Cosmética botánica. Sin químicos, sin crueldad. Con ciencia y alma.
          </p>
        </div>

        <div className="products-grid">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
