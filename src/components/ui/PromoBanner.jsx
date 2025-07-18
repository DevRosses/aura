import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

function PromoBanner() {
  const navigate = useNavigate();

  return (
    <div className="container text-center">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">¡Bienvenido a AURA!</h1>
        <p className="fs-4">
          Descubre nuestras colecciones exclusivas y encuentra tu estilo único.
        </p>
        <button
          className="btn btn-warning btn-lg"
          type="button"
          onClick={() => navigate(ROUTES.PRODUCTS)}
        >
          Explorar
        </button>
      </div>
    </div>
  );
}

export default PromoBanner;
