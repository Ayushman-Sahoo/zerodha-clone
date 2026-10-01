import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">

        {/* ================= HEADING ================= */}
        <div className="col-12">
          <h1>The Zerodha Universe</h1>

          <p className="mt-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>


        {/* ================= ZERODHA FUND HOUSE ================= */}
        <div className="col-4 p-3 mt-4">
          <a
            href="https://www.zerodhafundhouse.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-dark"
          >
            <div
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="media/images/zerodhaFundhouse.png"
                alt="Zerodha Fund House"
                style={{
                  maxWidth: "230px",
                  maxHeight: "85px",
                  objectFit: "contain",
                }}
              />
            </div>

            <p className="text-muted mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </a>
        </div>


        {/* ================= SENSIBULL ================= */}
        <div className="col-4 p-3 mt-4">
          <a
            href="https://sensibull.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-dark"
          >
            <div
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="media/images/sensibullLogo.svg"
                alt="Sensibull"
                style={{
                  maxWidth: "180px",
                  maxHeight: "70px",
                  objectFit: "contain",
                }}
              />
            </div>

            <p className="text-muted mt-3">
              Options trading platform that lets you create strategies,
              analyze positions, and examine data points like open interest,
              FII/DII, and more.
            </p>
          </a>
        </div>


        {/* ================= TIJORI ================= */}
        <div className="col-4 p-3 mt-4">
          <a
            href="https://www.tijorifinance.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-dark"
          >
            <div
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="media/images/tijori.svg"
                alt="Tijori"
                style={{
                  maxWidth: "220px",
                  maxHeight: "70px",
                  objectFit: "contain",
                }}
              />
            </div>

            <p className="text-muted mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>


        {/* ================= STREAK ================= */}
        <div className="col-4 p-3 mt-4">
          <a
            href="https://streak.tech/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-dark"
          >
            <div
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="media/images/streakLogo.png"
                alt="Streak"
                style={{
                  maxWidth: "180px",
                  maxHeight: "70px",
                  objectFit: "contain",
                }}
              />
            </div>

            <p className="text-muted mt-3">
              Systematic trading platform that allows you to create and
              backtest strategies without coding.
            </p>
          </a>
        </div>


        {/* ================= SMALLCASE ================= */}
        <div className="col-4 p-3 mt-4">
          <a
            href="https://www.smallcase.com/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-dark"
          >
            <div
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="media/images/smallcaseLogo.png"
                alt="smallcase"
                style={{
                  maxWidth: "190px",
                  maxHeight: "70px",
                  objectFit: "contain",
                }}
              />
            </div>

            <p className="text-muted mt-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks and ETFs.
            </p>
          </a>
        </div>


        {/* ================= DITTO ================= */}
        <div className="col-4 p-3 mt-4">
          <a
            href="https://joinditto.in/"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none text-dark"
          >
            <div
              style={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="media/images/dittoLogo.png"
                alt="Ditto"
                style={{
                  maxWidth: "190px",
                  maxHeight: "75px",
                  objectFit: "contain",
                }}
              />
            </div>

            <p className="text-muted mt-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </a>
        </div>


        {/* ================= SIGN UP BUTTON ================= */}
        <div className="col-12 mt-4 mb-5">
          <a
            href="/signup"
            className="btn btn-primary fs-5 px-5 py-2"
          >
            Sign up for free
          </a>
        </div>

      </div>
    </div>
  );
}

export default Universe;