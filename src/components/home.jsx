import React, { Component } from "react";
import { getRentals } from "./datas/rentals";
import DisplayRentals from "./displayrentals";
import Header from "./header";
import LandingPage from "./landingpage";
class Home extends Component {
  state = { rentals: [] };
  componentDidMount() {
    this.setState({ rentals: getRentals() });
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <LandingPage rentalsImage={this.state.rentals} />
          <DisplayRentals rentals={this.state.rentals} />
        </main>
      </div>
    );
  }
}

export default Home;
