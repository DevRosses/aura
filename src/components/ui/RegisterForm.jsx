import "../../assets/styles/components/ui/forms.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";


function RegisterForm({
  setShowPassword,
  showPassword,
  sendPasswordResetEmail,
  formData,
  handleSubmit,
}) {
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="text-center">Regístrate</h2>

        <div className="form-group">
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

        <div className="form-group">
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

        <div className="form-group">
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

        <div className="form-group">
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

        <button type="submit" className="btn btn-primary btn-block">
          Regístrate
        </button>

        <div className="form-group">
          <p className="pt-3">
            ¿Tenés cuenta?{" "}
            <button className="btn btn-secondary btn-block">
              <Link
                to={ROUTES.LOGIN}
                className="text-decoration-none text-light"
              >
                Ingresá
              </Link>
            </button>
          </p>
          <p className="pt-3">
            ¿Olvidaste tu contraseña?{" "}
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => sendPasswordResetEmail(formData.email)}
            >
              <p className="text-light p-0 m-0">Recuperar</p>
            </button>
          </p>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
