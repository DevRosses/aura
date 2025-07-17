import { ROUTES } from "../constants/routes";
import { useNavigate } from "react-router-dom";
import { dispararSweetBasico } from "../utils/SweetAlert";
import { dispararAlertaVerificacion } from "../utils/SweetAlert";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { sendPasswordResetEmail } from "../services/userService";
import { auth } from "../firebase/config";
import { sendEmailVerification } from "firebase/auth";
import LoginForm from "../components/ui/LoginForm";

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

  return <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} showPassword={showPassword} setShowPassword={setShowPassword} sendPasswordResetEmail={sendPasswordResetEmail} />;
}

export default LoginPage;
