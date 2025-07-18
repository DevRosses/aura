import { useState, useEffect } from "react";
import { getUsers, updateUser, deleteUser } from "../../services/userService";
import { Icon } from "@iconify/react";
import {
  dispararSweetDecision,
  dispararSweetAlerta,
  dispararSweetSelect,
} from "../../utils/SweetAlert";
import "../../assets/styles/components/ui/panel.css";


const UsersAdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const usersData = await getUsers();
      setUsers(usersData);
    } catch (error) {
      dispararSweetAlerta(
        "error",
        "Error",
        "No se pudieron cargar los usuarios."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditRole = async (user) => {
    const { value: newRole } = await dispararSweetSelect(
      "Editar Rol de Usuario",
      {
        user: "User",
        admin: "Admin",
      },
      "Seleccione el nuevo rol..."
    );

    if (newRole) {
      try {
        await updateUser(user.id, { role: newRole });
        fetchUsers();
        dispararSweetAlerta(
          "success",
          "¡Rol actualizado!",
          "El rol del usuario ha sido cambiado."
        );
      } catch (error) {
        dispararSweetAlerta("error", "Error", "No se pudo actualizar el rol.");
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
            "El usuario fue eliminado."
          );
        } catch (error) {
          dispararSweetAlerta(
            "error",
            "Error",
            "No se pudo eliminar el usuario."
          );
        }
      }
    });
  };

  if (loading) return <p className="text-center mt-5">Cargando usuarios...</p>;

  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <p className="mb-4 text-center">
          Aquí puedes editar los roles de los usuarios.
        </p>
        {/* ... tabla de usuarios registrados ... */}
        <table className="table table-hover align-middle">
          <thead className="table">
            <tr>
              
              <th>Usuario</th>
              <th>Rol</th>
              <th className="text-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.role}`}>{user.role}</span>
                </td>
                <td className="table-actions">
                  <button
                    className="btn-icon"
                    title="Editar Rol"
                    onClick={() => handleEditRole(user)}
                  >
                    <Icon icon="mdi:pencil" />
                  </button>
                  <button
                    className="btn-icon btn-danger"
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
