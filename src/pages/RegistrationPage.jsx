import { ROUTES } from "../constants/routes";
import { Link } from "react-router-dom";
import { dispararSweetBasico } from "../utils/SweetAlert";
function RegistrationPage() {
  return (
    <>
      <form className="container-fluid m-4 pt-5">
        <h2 className="text-center">Registrate</h2>
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
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-warning me-3">
          Registrate
        </button>
      </form>

      <div className="container-fluid m-4 pt-5  ">
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
