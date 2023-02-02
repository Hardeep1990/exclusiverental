import React from "react";
const DispalyRentals = ({ rentals }) => {
  return (
    <section className="py-5 bg-gray-100">
      <div className="container">
        <div className="text-center pb-lg-4">
          <p className="subtitle">One-of-A-Kind vacation rentals</p>
          <h2 className="mb-5">Booking with us is easy</h2>
        </div>
        <div className="row d-flex justify-content-center">
          {rentals.map((r) => (
            <div
              key={r.id}
              className="card d-flex align-items-center justify-content-center col-lg-3 mb-4 m-2"
              style={{ width: "18rem", padding: "0px" }}
            >
              <img src={r.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{r.suburb}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{r.type}</h6>
                <h6 className="card-subtitle mb-2">{r.price} NZD night</h6>
                <a href="#" className="card-link">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DispalyRentals;
