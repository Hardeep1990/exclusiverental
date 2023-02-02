import React, { Component } from "react";
import { getRentals } from "./datas/rentals";
import DisplayRentals from "./displayrentals";
import Header from "./header";
class Home extends Component {
  state = { rentals: getRentals() };
  // componentDidMount() {
  //   const rentals = getRentals();
  //   this.setState(rentals);
  // }
  render() {
    return (
      <div>
        <Header />
        <main>
          <section className="landing-section">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/images/rentals/2.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/rentals/77.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/rentals/444.jpeg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
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
          <DisplayRentals rentals={this.state.rentals} />
        </main>
      </div>
    );
  }
}

export default Home;
