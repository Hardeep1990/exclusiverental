import React, { Component } from "react";
import { getRentals } from "./datas/rentals";
import DisplayRentals from "./displayrentals";
import CounterExample from "./hook";
import LandingPage from "./landingpage";
class Home extends Component {
  state = { rentals: [] };

  componentDidMount() {
    this.setState({ rentals: getRentals() });
  }

  render() {
    return (
      <main id="home">
        <LandingPage rentalsImage={this.state.rentals} />
        <DisplayRentals rentals={this.state.rentals} />
      </main>
    );
  }
}

export default Home;
