import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">

        <h1>Technology</h1>

        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="mt-3 mb-5">
          Check out our{" "}

          <Link
            to="/products"
            className="text-decoration-none"
          >
            investment offerings →
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Hero;