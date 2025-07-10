function PromoBanner() {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">¡Bienvenido a AURA!</h1>
          <p className="fs-4">
            Descubre nuestras colecciones exclusivas y encuentra tu estilo
            único.
          </p>
          <button className="btn btn-warning btn-lg" type="button">
            Ver ofertas
          </button>
        </div>
      </div>
    </>
  );
}

export default PromoBanner;