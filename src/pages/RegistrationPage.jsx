import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { dispararSweetBasico } from "../utils/SweetAlert";
import { useState } from "react";
import RegisterForm from "../components/ui/RegisterForm";



function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { register } = useAuth();
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

      dispararSweetBasico(
        "success",
        "¡Registro exitoso!",
        "Ahora puedes iniciar sesión.",
        "¡Genial!"
      );
      navigate(ROUTES.LOGIN);
    } catch (error) { 
      if (error.code === 'auth/email-already-in-use') {
        dispararSweetBasico(
          "error",
          "Correo ya registrado",
          "La dirección de correo que ingresaste ya está en uso. Por favor, intenta con otra o inicia sesión.",
          "Entendido"
        );
      } else {
        
        dispararSweetBasico(
          "error",
          "Error en el registro",
          "Ocurrió un problema durante el registro. Por favor, verifica tus datos e inténtalo de nuevo.",
          "Ok"
        );
      }
    }
  }

  
  return (
    
<RegisterForm handleSubmit={handleSubmit} showPassword={showPassword} setShowPassword={setShowPassword} />
      );
}

export default RegistrationPage;
