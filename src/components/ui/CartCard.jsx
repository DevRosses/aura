const CartCard = ({ cartItems }) => {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={cartItems.imagen}
              className="img-fluid product-card-img rounded-start"
              alt={cartItems.nombre}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{cartItems.nombre}</h5>
              <p className="card-text">{cartItems.descripcion}</p>
              <p className="card-text">
                <small className="text-muted">
                  Última actualización hace 3 minutos
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;