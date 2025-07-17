
import Swal from "sweetalert2";


const AuraSwal = Swal.mixin({
  customClass: {
    popup: "aura-swal-popup",
    title: "aura-swal-title",
    htmlContainer: "aura-swal-html",
    confirmButton: "btn btn-primary",
    cancelButton: "btn btn-secondary",
    input: "aura-swal-input", 
  },
  buttonsStyling: false,
});

/**
 * Dispara una alerta de decisión (confirmación) con el tema de Aura.
 */
export const dispararSweetDecision = (
  icon,
  title,
  text,
  confirmButtonText,
  cancelButtonText
) => {
  return AuraSwal.fire({
    icon,
    title,
    text,
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    reverseButtons: true,
  });
};

/**
 * Dispara una alerta simple de información (éxito, error, etc.) con el tema de Aura.
 */
export const dispararSweetAlerta = (icon, title, text) => {
  return AuraSwal.fire({
    icon,
    title,
    text,
  });
};

/**
 * Dispara una alerta de "En construcción".
 */
export const dispararEnConstruccion = () => {
  return AuraSwal.fire({
    icon: "info",
    title: "¡Próximamente!",
    text: "Esta sección está en construcción. ¡Vuelve pronto para ver las novedades!",
    confirmButtonText: "Entendido",
  });
};

/**
 * Dispara una alerta con un input de tipo 'select' usando el tema de Aura.

 */
export const dispararSweetSelect = (title, inputOptions, inputPlaceholder) => {

  return AuraSwal.fire({
    title,
    input: "select",
    inputOptions,
    inputPlaceholder,
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
  });
};
