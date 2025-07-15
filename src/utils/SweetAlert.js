import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";



const swalBaseConfig = {
  customClass: {
    popup: "swal2-root",
    confirmButton: "swal2-confirm",
    cancelButton: "swal2-cancel",
    title: "swal2-title",
    content: "swal2-content",
  },
  background: "var(--color-secundario)",
  color: "var(--color-primario)",
  confirmButtonColor: "var(--color-acento)",
  cancelButtonColor: "var(--color-acento)",
  buttonsStyling: false,
  showClass: {
    popup: "fade-in",
  },
  hideClass: {
    popup: "",
  },
};

export function dispararSweetBasico(icon, title, text, confirmButtonText) {
  return Swal.fire({
    ...swalBaseConfig,
    icon,
    title,
    text,
    confirmButtonText,
  });
}


export function dispararSweetDecision( icon, title, text, confirmButtonText, cancelButtonText) {
  return Swal.fire({
    ...swalBaseConfig,
    icon,
    title,
    text,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText
  });
}
export function dispararSweetConfirmacion() {
  return Swal.fire({
    ...swalBaseConfig,
    icon: "warning",
    title: "¿Estás seguro?",
    text: "Esta acción no se puede deshacer.",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  });
}

export const dispararSweetInput = (title, label) => {
  return Swal.fire({
    title,
    input: "text",
    inputLabel: label,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    inputValidator: (value) => {
      if (!value) {
        return "¡Necesitas escribir algo!";
      }
    },
  })
}

export const dispararSweetSelect = (title, text, options, currentValue) => {
  return Swal.fire({
    title,
    text,
    input: "select",
    inputOptions: options,
    inputValue: currentValue, // Esto pre-selecciona la opción actual
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  });
};

export const dispararAlertaVerificacion = async (onConfirm) => {
  const result = await Swal.fire({
    title: "Verifica tu correo electrónico",
    text: "No puedes iniciar sesión hasta que verifiques tu correo. ¿Quieres que te enviemos el enlace de nuevo?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, reenviar correo",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  });
  // Si el usuario confirma, llamamos a la función que nos pasaron
  if (result.isConfirmed) {
    onConfirm();
  }
};