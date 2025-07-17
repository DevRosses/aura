import '../../assets/styles/components/ui/forms.css'
import { ROUTES } from "../../constants/routes";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function LoginForm( { handleChange, handleSubmit, formData, showPassword, setShowPassword, sendPasswordResetEmail} ) {
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
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
            value={formData.email}
            onChange={handleChange}
          />
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
              value={formData.password}
              onChange={handleChange}
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
          Entrar
        </button>
        <div className="form-group">
          <p className="pt-3">
            ¿No tienes una cuenta?{" "}
            <button className="btn btn-secondary btn-block">
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

export default LoginForm;