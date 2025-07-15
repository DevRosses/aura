import { ROUTES } from "../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { dispararSweetBasico } from "../utils/SweetAlert";
import { dispararAlertaVerificacion } from "../utils/SweetAlert";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { sendPasswordResetEmail } from "../services/userService";
import { auth } from "../firebase/config";
import { sendEmailVerification } from "firebase/auth";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Estado para contar los intentos de login sin verificar ---
  const [verificationAttempts, setVerificationAttempts] = useState(0);

  // Efecto que se dispara cuando los intentos cambian ---
  useEffect(() => {
    if (verificationAttempts >= 3) {
      dispararSweetBasico(
        "info",
        "Demasiados intentos",
        "Serás redirigido a nuestra página de contacto para ayudarte.",
        "Ok"
      ).then(() => {
        navigate(ROUTES.CONTACT_US);
      });
    }
  }, [verificationAttempts, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData.email, formData.password)
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
        if (error.message === "EMAIL_NOT_VERIFIED") {
          setVerificationAttempts((prev) => prev + 1);

          // 2. Define la "tarea" que quieres que se ejecute al confirmar
          const reenviarCorreo = () => {
            if (auth.currentUser) {
              sendEmailVerification(auth.currentUser).then(() => {
                dispararSweetBasico(
                  "success",
                  "Correo reenviado",
                  "Revisa tu bandeja de entrada.",
                  "Ok"
                );
              });
            }
          };

          // 3. Llama a tu "Asistente" y pásale la tarea
          dispararAlertaVerificacion(reenviarCorreo);
        } else {
          // Errores normales de login
          dispararSweetBasico(
            "error",
            "Error al iniciar sesión",
            "El correo o la contraseña son incorrectos.",
            "Inténtalo de nuevo"
          );
        }
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
        <button type="submit" className="btn btn-sm btn-warning me-3">
          Entrar
        </button>
      </form>
      <div className="container-fluid m-4 pt-5">
        <p className="pt-3">
          ¿No tienes una cuenta?{" "}
          <button className="btn btn-sm btn-secondary">
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
            className="btn btn-sm btn-secondary text-light"
            onClick={() => sendPasswordResetEmail(formData.email)}
          >
            <p className="text-light p-0 m-0">Recuperar</p>
          </button>
        </p>
      </div>
    </>
  );
}

export default LoginPage;
