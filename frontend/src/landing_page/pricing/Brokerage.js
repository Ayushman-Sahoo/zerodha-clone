import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const tables = {
    equity: {
      headers: [
        "Equity delivery",
        "Equity intraday",
        "F&O - Futures",
        "F&O - Options",
      ],

      rows: [
        [
          "Brokerage",
          "Zero brokerage",
          "0.03% or ₹20/executed order whichever is lower",
          "0.03% or ₹20/executed order whichever is lower",
          "Flat ₹20 per executed order",
        ],
        [
          "STT/CTT",
          "0.1% on buy & sell",
          "0.025% on sell side",
          "0.05% on sell side",
          "0.15% of intrinsic value on exercised options + 0.15% on sell side",
        ],
        [
          "Transaction charges",
          "NSE: 0.00307% BSE: 0.00375%",
          "NSE: 0.00307% BSE: 0.00375%",
          "NSE: 0.00183% BSE: 0%",
          "NSE: 0.03553% on premium",
        ],
        [
          "GST",
          "18% on brokerage + SEBI charges + transaction charges",
          "18% on brokerage + SEBI charges + transaction charges",
          "18% on brokerage + SEBI charges + transaction charges",
          "18% on brokerage + SEBI charges + transaction charges",
        ],
        [
          "SEBI charges",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.015% or ₹1500 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      ],
    },

    currency: {
      headers: [
        "Currency futures",
        "Currency options",
      ],

      rows: [
        [
          "Brokerage",
          "0.03% or ₹20/executed order whichever is lower",
          "₹20/executed order",
        ],
        [
          "STT/CTT",
          "No STT",
          "No STT",
        ],
        [
          "Transaction charges",
          "NSE: 0.00035% BSE: 0.00045%",
          "NSE: 0.0311% BSE: 0.001%",
        ],
        [
          "GST",
          "18% on brokerage + SEBI charges + transaction charges",
          "18% on brokerage + SEBI charges + transaction charges",
        ],
        [
          "SEBI charges",
          "₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.0001% or ₹10 / crore on buy side",
          "0.0001% or ₹10 / crore on buy side",
        ],
      ],
    },

    commodity: {
      headers: [
        "Commodity futures",
        "Commodity options",
      ],

      rows: [
        [
          "Brokerage",
          "0.03% or ₹20/executed order whichever is lower",
          "₹20/executed order",
        ],
        [
          "STT/CTT",
          "0.01% on sell side (Non-Agri)",
          "0.05% on sell side",
        ],
        [
          "Transaction charges",
          "MCX: 0.0021% NSE: 0.0001%",
          "MCX: 0.0418% NSE: 0.001%",
        ],
        [
          "GST",
          "18% on brokerage + SEBI charges + transaction charges",
          "18% on brokerage + SEBI charges + transaction charges",
        ],
        [
          "SEBI charges",
          "Agri: ₹1 / crore, Non-agri: ₹10 / crore",
          "₹10 / crore",
        ],
        [
          "Stamp charges",
          "0.002% or ₹200 / crore on buy side",
          "0.003% or ₹300 / crore on buy side",
        ],
      ],
    },
  };

  const currentTable = tables[activeTab];

  return (
    <div className="container brokerage-container">

      {/* Tabs */}

      <div className="pricing-tabs">

        <button
          className={activeTab === "equity" ? "active" : ""}
          onClick={() => setActiveTab("equity")}
        >
          Equity
        </button>

        <button
          className={activeTab === "currency" ? "active" : ""}
          onClick={() => setActiveTab("currency")}
        >
          Currency
        </button>

        <button
          className={activeTab === "commodity" ? "active" : ""}
          onClick={() => setActiveTab("commodity")}
        >
          Commodity
        </button>

      </div>

      {/* Main charges table */}

      <div className="table-responsive">

        <table className="table table-bordered pricing-table">

          <thead>
            <tr>
              <th></th>

              {currentTable.headers.map((header, index) => (
                <th key={index}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>

            {currentTable.rows.map((row, index) => (
              <tr key={index}>

                <td>{row[0]}</td>

                {row.slice(1).map((value, i) => (
                  <td key={i}>
                    {value}
                  </td>
                ))}

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Calculator link */}

      <div className="calculator-link">
        <a href="/">
          Calculate your costs upfront using our brokerage calculator
        </a>
      </div>


      {/* Account opening */}

      <section className="pricing-section">

        <h3>Charges for account opening</h3>

        <table className="table table-bordered pricing-table">

          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Individual account</td>
              <td>
                <span className="free-badge">FREE</span>
              </td>
            </tr>

            <tr>
              <td>Minor account</td>
              <td>
                <span className="free-badge">FREE</span>
              </td>
            </tr>

            <tr>
              <td>NRI account</td>
              <td>₹500</td>
            </tr>

            <tr>
              <td>HUF account</td>
              <td>
                <span className="free-badge">FREE</span>
                {" "}online / ₹500 offline
              </td>
            </tr>

            <tr>
              <td>
                Partnership, LLP, and Corporate accounts
                (offline only)
              </td>
              <td>₹500</td>
            </tr>

          </tbody>

        </table>

      </section>


      {/* AMC */}

      <section className="pricing-section">

        <h3>Demat AMC (Annual Maintenance Charge)</h3>

        <div className="free-note">
          Free for first year*
        </div>

        <p className="small-text">
          From second year onwards, for BSDA accounts:
        </p>

        <table className="table table-bordered pricing-table">

          <thead>
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Up to ₹4 lakh</td>
              <td>
                <span className="free-badge">FREE</span>
              </td>
            </tr>

            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>
                ₹100 per year + 18% GST, charged quarterly
              </td>
            </tr>

            <tr>
              <td>Above ₹10 lakh</td>
              <td>
                ₹300 per year + 18% GST, charged quarterly
              </td>
            </tr>

          </tbody>

        </table>

        <p className="small-text">
          For a non-BSDA account, AMC is ₹300 per year + 18% GST,
          regardless of holdings value, charged quarterly.
        </p>

        <p className="small-text">
          To learn more about BSDA, click here. To learn more about
          AMC, click here.
        </p>

      </section>


      {/* Optional services */}

      <section className="pricing-section">

        <h3>Charges for optional value added services</h3>

        <table className="table table-bordered pricing-table">

          <thead>
            <tr>
              <th>Service</th>
              <th>Billing Frequency</th>
              <th>Charges</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Tickertape</td>
              <td>Monthly / Quarterly / Annual</td>
              <td>Free / Pro: ₹249 / ₹699 / ₹2399</td>
            </tr>

            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: ₹100 | SIP: ₹10</td>
            </tr>

            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect ₹500 | Personal Free</td>
            </tr>

          </tbody>

        </table>

      </section>


      {/* Charges explained */}

      <section className="pricing-section">

        <h3>Charges explained</h3>

        <div className="row charges-explained">

          {/* LEFT */}

          <div className="col-md-6">

            <h5>Securities/Commodities transaction tax</h5>

            <p>
              Tax levied by the government when transacting on the
              exchanges. Charged as above on both buy and sell sides
              when trading equity delivery. Charged only on selling
              side when trading intraday or F&O.
            </p>

            <h5>Transaction/Turnover Charges</h5>

            <p>
              Charged by exchanges (NSE, BSE, MCX) on the value of
              your transactions.
            </p>

            <p>
              BSE has revised transaction charges in various groups
              and these charges are applicable as per exchange rules.
            </p>

            <h5>Call & trade</h5>

            <p>
              Additional charges of ₹50 per order for orders placed
              through a dealer at Zerodha.
            </p>

            <h5>Stamp charge</h5>

            <p>
              Stamp charges by Government of India as per the Indian
              Stamp Act for transactions on stock exchanges and
              depositories.
            </p>

            <h5>NRI brokerage charges</h5>

            <ul>
              <li>
                Non-PIS account: 0.5% or ₹50 per executed order,
                whichever is lower.
              </li>

              <li>
                PIS account: 0.5% or ₹200 per executed order,
                whichever is lower.
              </li>

              <li>
                ₹500 + GST yearly account maintenance charge.
              </li>
            </ul>

            <h5>Account with debit balance</h5>

            <p>
              If the account is in debit balance, orders are charged
              ₹40 per executed order instead of ₹20.
            </p>

            <h5>Margin Trading Facility (MTF)</h5>

            <p>
              MTF interest is charged on the funded amount and
              brokerage is applicable as per the MTF pricing.
            </p>

          </div>


          {/* RIGHT */}

          <div className="col-md-6">

            <h5>GST</h5>

            <p>
              Tax levied by the government on services rendered.
              18% of brokerage + SEBI charges + transaction charges.
            </p>

            <h5>SEBI Charges</h5>

            <p>
              Charged at ₹10 per crore + GST by Securities and
              Exchange Board of India.
            </p>

            <h5>DP (Depository participant) charges</h5>

            <p>
              ₹15.34 per scrip is charged when stocks are sold,
              irrespective of quantity.
            </p>

            <h5>Pledging charges</h5>

            <p>
              ₹30 + GST per pledge request per ISIN.
            </p>

            <h5>AMC (Account maintenance charges)</h5>

            <p>
              Free for the first year on all new resident individual
              accounts.
            </p>

            <h5>Corporate action order charges</h5>

            <p>
              ₹20 plus GST will be charged for applicable corporate
              action orders.
            </p>

            <h5>Off-market transfer charges</h5>

            <p>
              ₹25 per transaction.
            </p>

            <h5>Physical CMR request</h5>

            <p>
              First CMR request is free. Charges apply for subsequent
              requests.
            </p>

            <h5>Payment gateway charges</h5>

            <p>
              ₹9 + GST.
            </p>

            <h5>Delayed Payment Charges</h5>

            <p>
              Interest is levied at 18% a year or 0.05% per day on
              the debit balance.
            </p>

          </div>

        </div>

      </section>


      {/* Disclaimer */}

      <section className="pricing-section disclaimer-section">

        <h5>Disclaimer</h5>

        <p>
          Brokerage will not exceed the rates specified by SEBI and
          the exchanges. All statutory and regulatory charges will be
          levied at actuals. Brokerage is also charged on expired,
          exercised, and assigned options contracts.
        </p>

      </section>

    </div>
  );
}

export default Brokerage;