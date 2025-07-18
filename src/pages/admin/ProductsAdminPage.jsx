import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../../services/productService";
import { Icon } from "@iconify/react";
import { dispararSweetDecision } from "../../utils/SweetAlert";
import ProductForm from "../../components/admin/ProductForm";
import "../../assets/styles/components/ui/panel.css"


const ProductsAdminPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const productList = await getProducts();
      setProducts(productList);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSave = () => {
    setShowForm(false);
    setSelectedProduct(null);
    loadProducts();
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleAdd = () => {
    setSelectedProduct(null);
    setShowForm(true);
  };

  const handleDelete = (productId) => {
    dispararSweetDecision(
      "warning",
      "¿Estás seguro?",
      "¡No podrás revertir esto!",
      "Sí, bórralo",
      "Cancelar"
    ).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProduct(productId);
        loadProducts();
      }
    });
  };

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error)
    return <p className="alert alert-danger">Error: {error.message}</p>;

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Gestión de Productos</h2>
        <button className="btn btn-primary" onClick={handleAdd}>
          <Icon icon="mdi:plus-circle-outline" className="me-2" />
          Agregar Producto
        </button>
      </div>

      {showForm ? (
        <ProductForm product={selectedProduct} onSave={handleSave} />
      ) : (
        <div className="table-responsive">
          <p className="mb-4 text-center">
            Aquí puedes agregar, editar o eliminar productos.
          </p>
          {/* ... tabla de productos ... */}
          <table className="table table-hover align-middle">
            <thead className="table">
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.imagen}
                      alt={product.nombre}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{product.nombre}</td>
                  <td>${product.precio}</td>
                  <td>{product.stock}</td>
                  <td className="table-actions">
                    <button
                      className="btn-icon"
                      title="Editar"
                      onClick={() => handleEdit(product)}
                    >
                      <Icon icon="mdi:pencil" />
                    </button>
                    <button
                      className="btn-icon btn-danger"
                      title="Eliminar"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Icon icon="mdi:delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductsAdminPage;
