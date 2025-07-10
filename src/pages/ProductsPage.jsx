import { useApi } from "../hooks/useApi";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ui/ProductCard";

const Products = () => {
  const { data: products, loading, error } = useApi(getProducts);

  if (products) {
    console.log("📦 Productos recibidos de la API:", products);
  }

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
    <div>
      <h1 className="mb-4">Nuestros Productos</h1>
      <div class="row row-cols-2 row-cols-md-4 g-8">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
