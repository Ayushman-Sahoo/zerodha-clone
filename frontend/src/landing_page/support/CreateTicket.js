import React from "react";

function CreateTicket() {
  const topics = [
    {
      id: "accountOpening",
      icon: "fa-solid fa-circle-plus",
      title: "Account Opening",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      id: "zerodhaAccount",
      icon: "fa-solid fa-circle-user",
      title: "Your Zerodha Account",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      id: "kite",
      icon: "fa-solid fa-chart-line",
      title: "Kite",
      items: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      id: "funds",
      icon: "fa-solid fa-circle-dollar-to-slot",
      title: "Funds",
      items: [
        "Add money",
        "Withdraw money",
        "Add bank accounts",
        "eMandates",
      ],
    },
    {
      id: "console",
      icon: "fa-solid fa-chart-pie",
      title: "Console",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      id: "coin",
      icon: "fa-solid fa-coins",
      title: "Coin",
      items: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <section className="container support-topics">

      {/* TITLE */}
      <h2 className="text-center support-topic-heading">
        To create a ticket, select a relevant topic
      </h2>

      <div className="row">

        {/* ================= LEFT SIDE ================= */}
        <div className="col-lg-8">

          <div className="accordion" id="supportAccordion">

            {topics.map((topic) => (
              <div
                className="accordion-item support-accordion-item"
                key={topic.id}
              >

                <h2 className="accordion-header">

                  <button
                    className="accordion-button collapsed support-accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${topic.id}`}
                    aria-expanded="false"
                    aria-controls={topic.id}
                  >

                    <span className="support-icon-box">
                      <i className={topic.icon}></i>
                    </span>

                    <span className="support-title">
                      {topic.title}
                    </span>

                  </button>

                </h2>

                <div
                  id={topic.id}
                  className="accordion-collapse collapse"
                  data-bs-parent="#supportAccordion"
                >

                  <div className="accordion-body support-accordion-body">

                    <ul>
                      {topic.items.map((item, index) => (
                        <li key={index}>
                          <a href="#!">{item}</a>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="col-lg-4 support-sidebar">

          {/* FEATURED */}
          <div className="support-featured">

            <h5>Featured</h5>

            <ul>
              <li>
                <a href="#!">
                  Surveillance measure on scrips - August 2026
                </a>
              </li>

              <li>
                <a href="#!">
                  Open Market Buybacks - August 2026
                </a>
              </li>
            </ul>

          </div>


          {/* QUICK LINKS */}
          <div className="support-quick-links">

            <div className="support-quick-title">
              Quick links
            </div>

            <a href="#!">
              1. Track account opening
            </a>

            <a href="#!">
              2. Track segment activation
            </a>

            <a href="#!">
              3. Intraday margins
            </a>

            <a href="#!">
              4. Kite user manual
            </a>

            <a href="#!">
              5. Learn how to create a ticket
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CreateTicket;