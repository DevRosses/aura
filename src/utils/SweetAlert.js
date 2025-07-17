import Swal from "sweetalert2";

/**
 * Configuración base para todas las alertas de Swal.
 * Unifica el estilo de "Aura" en un solo lugar.
 */
const swalBaseConfig = {
 
  customClass: {
    popup: "aura-swal-popup", // Contenedor principal de la alerta
    title: "aura-swal-title", // Título
    htmlContainer: "aura-swal-html", // Contenedor del texto/contenido
    confirmButton: "btn btn-primary", // Botón de confirmar
    cancelButton: "btn btn-secondary", // Botón de cancelar
  },
  buttonsStyling: false, // Le decimos a Swal que no aplique sus propios estilos a los botones
};



export function dispararSweetBasico(
  icon,
  title,
  text,
  confirmButtonText = "Ok"
) {
  return Swal.fire({
    ...swalBaseConfig, // Aplicamos nuestro tema
    icon,
    title,
    text,
    confirmButtonText,
  });
}

export function dispararSweetDecision(
  icon,
  title,
  text,
  confirmButtonText,
  cancelButtonText
) {
  return Swal.fire({
    ...swalBaseConfig, // Aplicamos nuestro tema
    icon,
    title,
    text,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    reverseButtons: true, // Buena práctica para poner confirmar a la derecha
  });
}

export function dispararSweetConfirmacion() {
  return Swal.fire({
    ...swalBaseConfig, // Aplicamos nuestro tema
    icon: "warning",
    title: "¿Estás seguro?",
    text: "Esta acción no se puede deshacer.",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
  });
}

export const dispararSweetInput = (title, label) => {
  return Swal.fire({
    ...swalBaseConfig, // Aplicamos nuestro tema
    title,
    input: "text",
    inputLabel: label,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
    inputValidator: (value) => {
      if (!value) {
        return "¡Necesitas escribir algo!";
      }
    },
  });
};

export const dispararSweetSelect = (title, text, options, currentValue) => {
  return Swal.fire({
    ...swalBaseConfig, // Aplicamos nuestro tema
    title,
    text,
    input: "select",
    inputOptions: options,
    inputValue: currentValue,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
  });
};

export const dispararAlertaVerificacion = async (onConfirm) => {
  const result = await Swal.fire({
    ...swalBaseConfig, // Aplicamos nuestro tema
    title: "Verifica tu correo electrónico",
    text: "No puedes iniciar sesión hasta que verifiques tu correo. ¿Quieres que te enviemos el enlace de nuevo?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, reenviar correo",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
  });

  if (result.isConfirmed) {
    onConfirm();
  }
};
