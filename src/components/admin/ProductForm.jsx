import { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../../services/productService";
import { dispararSweetAlerta } from "../../utils/SweetAlert";

const ProductForm = ({ product, onSave }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    stock: "",
    imagen: "",
    descripcion: "",
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
        await updateProduct(product.id, formData);
        dispararSweetAlerta(
          "success",
          "Producto actualizado",
          "El producto se ha actualizado correctamente.",
          "¡Genial!"
        );
      } else {
        await createProduct(formData);
        dispararSweetAlerta(
          "success",
          "Producto creado",
          "El producto se ha creado correctamente.",
          "¡Perfecto!"
        );
      }
      onSave(); // Llama a la función para recargar productos y cerrar el formulario
    } catch (error) {
      dispararSweetAlerta("error", "Error", error.message, "Ok");
    }
  };

  return (
    <div className="container mt-4">
      <h2>{product ? "Editar Producto" : "Agregar Producto"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">URL de la Imagen</label>
          <input
            type="text"
            className="form-control"
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {product ? "Guardar Cambios" : "Agregar Producto"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
