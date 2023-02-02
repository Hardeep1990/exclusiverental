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
            <div></div>
          </section>
          <DisplayRentals rentals={this.state.rentals} />
        </main>
      </div>
    );
  }
}

export default Home;
