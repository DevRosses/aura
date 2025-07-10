import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";
import { dispararSweetBasico } from "../utils/SweetAlert";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(() => {
        
          navigate(ROUTES.DASHBOARD);
        dispararSweetBasico("success", "Inicio de sesión exitoso");
      })
      .catch((error) => {
        dispararSweetBasico("error", error.message);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-5">
        <div className="mb-2">
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
        <div className="mb-2">
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
          Entrar
        </button>
      </form>
      <p className="mt-3">
        ¿No tienes una cuenta? <Link to={ROUTES.REGISTER}>Regístrate</Link>
      </p>
      <p>
        ¿Olvidaste tu contraseña?{" "}
        <button
          className="text-primary"
          onClick={() => dispararSweetBasico("Funcionalidad en desarrollo")}
        >
          Recuperar contraseña
        </button>
      </p>
    </>
  );
}

export default LoginPage;
