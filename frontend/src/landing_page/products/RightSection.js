import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesription,
  learnMore,
  isCoin,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="col-6 p-5">

          <h1>{productName}</h1>

          <p className="mt-3">
            {productDesription}
          </p>

          {/* ================= COIN LINK ================= */}
          {isCoin ? (
            <div className="mt-4">
              <a
                href="https://www.coin.zerodha.com/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
                style={{
                  color: "#387ed1",
                  fontSize: "20px",
                }}
              >
                Coin&nbsp; →
              </a>
            </div>
          ) : (
            /* ================= NORMAL PRODUCT LINK ================= */
            <div className="mt-4">
              <a
                href={learnMore}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
                style={{
                  color: "#387ed1",
                  fontSize: "20px",
                }}
              >
                Learn More&nbsp; →
              </a>
            </div>
          )}

        </div>

        {/* ================= RIGHT SIDE IMAGE ================= */}
        <div className="col-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              maxWidth: "90%",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;