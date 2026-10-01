import React from "react";

function Hero() {
  return (
    <section className="support-hero">

      <div className="container">

        <div className="row align-items-center support-header">

          <div className="col-md-6">
            <h1 className="support-heading">
              Support Portal
            </h1>
          </div>

          <div className="col-md-6 text-md-end">
            <button className="btn support-ticket-btn">
              My tickets
            </button>
          </div>

        </div>

        <div className="input-group support-search">

          <span className="input-group-text support-search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>

          <input
            type="text"
            className="form-control support-search-input"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;