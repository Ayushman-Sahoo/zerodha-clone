import React, { useState } from "react";

function Team() {
  const [openBios, setOpenBios] = useState([]);

  const teamMembers = [
    {
      name: "Nikhil Kamath",
      role: "Co-founder & CFO",
      image: "/media/images/Nikhil.jpg",
      bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
    },
    {
      name: "Dr. Kailash Nadh",
      role: "CTO",
      image: "/media/images/Kailash.jpg",
      bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
    },
    {
      name: "Venu Madhav",
      role: "COO",
      image: "/media/images/Venu.jpg",
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.",
    },
    {
      name: "Seema Patil",
      role: "Director",
      image: "/media/images/Seema.jpg",
      bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.",
    },
    {
      name: "Karthik Rangappa",
      role: "Chief of Education",
      image: "/media/images/karthik.jpg",
      bio: 'Karthik "Guru" Rangappa single handedly wrote Varsity, Zerodha\'s massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.',
    },
    {
      name: "Austin Prakesh",
      role: "Director Strategy",
      image: "/media/images/Austin.jpg",
      bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.",
    },
  ];

  const toggleBio = (index) => {
    if (openBios.includes(index)) {
      setOpenBios(openBios.filter((item) => item !== index));
    } else {
      setOpenBios([...openBios, index]);
    }
  };

  return (
    <div className="container">

      {/* ================= PEOPLE ================= */}

      <div className="row p-3 mt-5">
        <h1 className="text-center">People</h1>
      </div>

      {/* ================= NITHIN KAMATH ================= */}

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{
              borderRadius: "100%",
              width: "50%",
            }}
          />

          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="https://nithinkamath.me/">Homepage</a> /{" "}
            <a href="https://tradingqna.com/u/nithin/summary">
              TradingQnA
            </a>{" "}
            / <a href="https://x.com/Nithin0dha">Twitter</a>
          </p>
        </div>
      </div>

      {/* ================= OTHER TEAM MEMBERS ================= */}

      <div className="row p-3 text-muted">

        {teamMembers.map((member, index) => (
          <div
            className="col-lg-4 col-md-6 col-12 p-4 text-center"
            key={member.name}
          >

            {/* PHOTO */}

            <img
              src={member.image}
              alt={member.name}
              style={{
                borderRadius: "100%",
                width: "45%",
                maxWidth: "180px",
                minWidth: "150px",
              }}
            />

            {/* NAME */}

            <h5 className="mt-4 mb-2">
              {member.name}
            </h5>

            {/* ROLE */}

            <p style={{ marginBottom: "5px" }}>
              {member.role}
            </p>

            {/* BIO BUTTON */}

            <button
              type="button"
              onClick={() => toggleBio(index)}
              style={{
                background: "none",
                border: "none",
                padding: "0",
                color: "#555",
                cursor: "pointer",
                fontSize: "16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <span>Bio</span>

              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRight: "1.5px solid #555",
                  borderBottom: "1.5px solid #555",

                  /* Fast arrow rotation */
                  transform: openBios.includes(index)
                    ? "rotate(225deg)"
                    : "rotate(45deg)",

                  transition: "transform 0.05s ease",

                  marginTop: openBios.includes(index)
                    ? "4px"
                    : "-3px",
                }}
              ></span>
            </button>

            {/* BIO DROPDOWN */}

            {openBios.includes(index) && (
              <div
                style={{
                  marginTop: "35px",
                  textAlign: "left",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                <p>{member.bio}</p>
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

export default Team;