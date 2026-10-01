import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">

        {/* ================= LOGO ================= */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>


        {/* ================= NAVIGATION ================= */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <form className="d-flex ms-auto" role="search">

            <ul className="navbar-nav mb-lg-0">

              {/* SIGNUP */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>


              {/* ABOUT */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about"
                >
                  About
                </Link>
              </li>


              {/* PRODUCTS */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/products"
                >
                  Products
                </Link>
              </li>


              {/* PRICING */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>


              {/* SUPPORT */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/support"
                >
                  Support
                </Link>
              </li>

            </ul>

          </form>
        </div>


        {/* ================= HAMBURGER ================= */}
        <button
          className="navbar-toggler d-block ms-3 p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;