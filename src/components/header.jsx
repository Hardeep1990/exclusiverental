import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <img src="logo.png" className="" alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Stays
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/home">
                  Rent
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/auction">
                  Auction
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/home">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/home">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item login m-2">
                <a
                  className="nav-link login active"
                  aria-current="page"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li className="nav-item  m-2">
                <a
                  className="nav-link register active"
                  aria-current="page"
                  href="#"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
