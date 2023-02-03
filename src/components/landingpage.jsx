import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
const LandingPage = ({ rentalsImage }) => {
  console.log("print", rentalsImage);
  return (
    <section className="landing-section">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {rentalsImage.map((data) => (
            <div key={data.id} className="carousel-item active">
              <img src={data.image} className="d-block w-100" alt=""></img>
            </div>
          ))}
        </div>
      </div>

      <div className="searchbox">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 mb-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success mb-2" type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default LandingPage;
