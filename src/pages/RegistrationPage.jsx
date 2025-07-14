import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";
import { dispararSweetBasico } from "../utils/SweetAlert";
function RegistrationPage() {
  
  const { register } = useAuth(); // usas la función register del contexto
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Captura todos los datos del formulario
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    
    const userData = { nombre, apellido };

    try {

      await register(email, password, userData);

      navigate(ROUTES.LOGIN); 
      dispararSweetBasico(
        "success",
        "¡Registro exitoso!",
        "Ahora puedes iniciar sesión.",
        "¡Genial!"
      );
    } catch (error) {
      console.error("Error en el registro:", error);
      dispararSweetBasico("error", "Error en el registro", error.message, "Ok");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container-fluid m-4 pt-5">
        <h2 className="text-center">Regístrate</h2>

        {/* CAMPO NUEVO: Nombre */}
        <div className="mb-4">
          <label htmlFor="nombreInput" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            id="nombreInput"
            required
          />
        </div>

        {/* CAMPO NUEVO: Apellido */}
        <div className="mb-4">
          <label htmlFor="apellidoInput" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            id="apellidoInput"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-warning me-3">
          Regístrate
        </button>
      </form>

      <div className="container-fluid m-3 pt-4  ">
        <p className="pt-3">
          ¿Tenes cuenta?{" "}
          <button className="btn btn-sm btn-secondary ">
            {" "}
            <Link to={ROUTES.LOGIN} className="text-decoration-none text-light">
              Ingresa
            </Link>
          </button>
        </p>
        <p className="pt-3">
          ¿Olvidaste tu contraseña?{" "}
          <button
            className="btn btn-sm btn-secondary text-light"
            onClick={() => dispararSweetBasico("Funcionalidad en desarrollo")}
          >
            <p className="text-light p-0 m-0">Recuperar</p>
          </button>
        </p>
      </div>
    </>
  );
}

export default RegistrationPage;
