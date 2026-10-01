import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  isCoin,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* ================= IMAGE ================= */}
        <div className="col-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>


        {/* ================= CONTENT ================= */}
        <div className="col-6 p-5">

          <h1>{productName}</h1>

          <p className="mt-3">
            {productDesription}
          </p>


          {/* ================= LINKS ================= */}

          {/* COIN */}
          {isCoin ? (
            <div className="mt-4">
              <a
                href="https://coin.zerodha.com/"
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
            /* NORMAL LINKS - ONLY SHOW IF PROVIDED */
            (tryDemo || learnMore) && (
              <div className="mt-4">

                {tryDemo && (
                  <a
                    href={tryDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                    style={{
                      color: "#387ed1",
                      fontSize: "20px",
                    }}
                  >
                    Try demo&nbsp; →
                  </a>
                )}

                {learnMore && (
                  <a
                    href={learnMore}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                    style={{
                      color: "#387ed1",
                      fontSize: "20px",
                      marginLeft: "70px",
                    }}
                  >
                    Learn more&nbsp; →
                  </a>
                )}

              </div>
            )
          )}


          {/* ================= APP BUTTONS ================= */}
          {googlePlay && appStore && (
            <div className="mt-4">

              <a
                href={googlePlay}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{
                    width: "170px",
                    height: "auto",
                  }}
                />
              </a>


              <a
                href={appStore}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                  style={{
                    width: "170px",
                    height: "auto",
                    marginLeft: "20px",
                  }}
                />
              </a>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default LeftSection;