function HomeCarousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?q=80&w=897&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="Promo 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>PROMO 1</h5>
            <p>Ejemplo 1</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="d-block w-100"
            alt="promo 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>PROMO 2</h5>
            <p>Ejemplo 2</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1629380107895-bb31e18bdc64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHNraW4lMjBjYXJlfGVufDB8MHwwfHx8Mg%3D%3D"
            className="d-block w-100"
            alt="promo 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>PROMO 3</h5>
            <p>Ejemplo 3</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeCarousel;
