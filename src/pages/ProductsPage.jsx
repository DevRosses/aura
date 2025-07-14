import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ui/ProductCard";

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
        setLoading(false); // Termina la carga (haya funcionado o no)
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <p className="alert alert-danger">
        Error al cargar productos: {error.message}
      </p>
    );

  return (
    <div className="container-fluid mt-5 p-4">
      <h2 className="p-2 text-center">
        Cada producto tiene una intención: hidratar, proteger, sanar.
      </h2>
      <p className="p-3 text-center">
        Cosmética botánica. Sin químicos, sin crueldad. Con ciencia y alma.
      </p>

      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 m-3">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
