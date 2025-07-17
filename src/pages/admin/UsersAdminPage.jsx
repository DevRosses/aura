import { useState, useEffect } from "react";
import { getUsers, updateUser, deleteUser } from "../../services/userService";
import { Icon } from "@iconify/react";
import {
  dispararSweetDecision,
  dispararSweetAlerta,
  dispararSweetSelect,
} from "../../utils/SweetAlert";

const UsersAdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      dispararSweetBasico(
        "error",
        "Error",
        "No se pudieron cargar los usuarios.",
        "Ok"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 2. Modifica la función para usar el nuevo SweetAlert
  const handleEditRole = async (user) => {
    const { value: newRole } = await dispararSweetSelect(
      "Editar Rol de Usuario",
      `Seleccione el nuevo rol para ${user.nombre}:`,
      {
        user: "User", 
        admin: "Admin",
      },
      user.role 
    );

    // 
    if (newRole) {
      try {
        await updateUser(user.id, { role: newRole });
        fetchUsers();
        dispararSweetAlerta(
          "success",
          "¡Rol actualizado!",
          "El rol del usuario ha sido cambiado.",
          "Hecho"
        );
      } catch (error) {
        dispararSweetAlerta(
          "error",
          "Error",
          "No se pudo actualizar el rol.",
          "Ok"
        );
      }
    }
  };

  const handleDelete = (userId) => {
    dispararSweetDecision(
      "warning",
      "¿Estás seguro?",
      "¡Esta acción no se puede revertir!",
      "Sí, eliminar",
      "Cancelar"
    ).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser(userId);
          fetchUsers();
          dispararSweetAlerta(
            "success",
            "Usuario Eliminado",
            "El usuario fue eliminado.",
            "Ok"
          );
        } catch (error) {
          dispararSweetAlerta(
            "error",
            "Error",
            "No se pudo eliminar el usuario.",
            "Ok"
          );
        }
      }
    });
  };

  if (loading) return <p className="text-center mt-5">Cargando usuarios...</p>;

  return (
    <div className="container mt-4">
      <h2>Gestión de Usuarios</h2>
      <p>Aquí puedes ver, editar y eliminar los usuarios registrados.</p>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`badge ${
                      user.role === "admin"
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    title="Editar Rol"
                    onClick={() => handleEditRole(user)}
                  >
                    <Icon icon="mdi:pencil" />
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    title="Eliminar"
                    onClick={() => handleDelete(user.id)}
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

export default UsersAdminPage;
