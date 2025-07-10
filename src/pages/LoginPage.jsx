import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <>
      <form>
        <div class="mb-2">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Nunca compartiremos su correo electrónico con nadie más.
          </div>
        </div>
        <div class="mb-2">
          <label for="exampleInputPassword1" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
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
    </>
  );
}

export default LoginPage;
