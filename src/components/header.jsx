import React from "react";
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stays
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Rent</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">Contact Us</a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link btn btn-sucess active"
                  aria-current="page"
                  href="#"
                >
                  Login
                </a>
              </li>
              <li className="nav-item ms-2">
                <a
                  className="nav-link btn btn-sucess active"
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
