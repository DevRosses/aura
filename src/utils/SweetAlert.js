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
  background: "var(--color-bg)",
  color: "var(--color-text)",
  confirmButtonColor: "var(--color-primary)",
  cancelButtonColor: "#aaa",
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
