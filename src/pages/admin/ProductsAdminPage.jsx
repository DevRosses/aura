import { useState, useEffect } from "react";
import { getProducts, deleteProduct } from "../../services/productService"; 
import { Icon } from "@iconify/react"; 
import { dispararSweetDecision } from "../../utils/SweetAlert"; 

const ProductsAdminPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // carga/recarga los productos
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

  // useEffect para cargar los productos cuando el componente se monta
  useEffect(() => {
    loadProducts();
  }, []); 

  // Función para manejar la eliminación de un producto
  const handleDelete = (productId) => {
    dispararSweetDecision(
      "warning",
      "¿Estás seguro?",
      "¡No podrás revertir esto!",
      "Sí, bórralo",
      "Cancelar"
    ).then(async (result) => {
      if (result.isConfirmed) {
        await deleteProduct(productId); // Llama al servicio para borrar
        loadProducts(); // Recarga la lista de productos para reflejar el cambio
      }
    });
  };

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error)
    return <p className="alert alert-danger">Error: {error.message}</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Gestión de Productos</h2>
        <button className="btn btn-primary">
          <Icon icon="mdi:plus-circle-outline" className="me-2" />
          Agregar Producto
        </button>
      </div>
      <p>Aquí puedes agregar, editar o eliminar productos.</p>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-dark">
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
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    title="Editar"
                  >
                    <Icon icon="mdi:pencil" />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
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
    </div>
  );
};

export default ProductsAdminPage;
