import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";
import { dispararSweetBasico } from "../utils/SweetAlert";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";



function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(() => {
        navigate(ROUTES.DASHBOARD);
        dispararSweetBasico(
          "success",
          "Inicio de sesión exitoso",
          "Bienvenido de nuevo",
          "Continuar"
        );
      })
      .catch((error) => {
        dispararSweetBasico(
          "error",
          "Error al iniciar sesión",
          error.message,
          "Inténtalo de nuevo"
        );
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container-fluid m-4 pt-5">
        <h2 className="text-center">Ingresa</h2>
        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos su correo electrónico con nadie más.
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setShowPassword(!showPassword)} 
            >
              <Icon icon={showPassword ? "mdi:eye-off" : "mdi:eye"} />
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-sm btn-warning me-3">
          Entrar
        </button>
      </form>
      <div className="container-fluid m-4 pt-5  ">
        <p className="pt-3">
          ¿No tienes una cuenta?{" "}
          <button className="btn btn-sm btn-secondary ">
            {" "}
            <Link
              to={ROUTES.REGISTER}
              className="text-decoration-none text-light"
            >
              Regístrate
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

export default LoginPage;
