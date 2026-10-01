import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* ================= MAIN FOOTER ================= */}
        <div className="row footer-main">

          {/* ================= ZERODHA ================= */}
          <div className="col-lg-3 col-md-6 footer-brand">

            {/* Zerodha Logo */}
            <img
              src="/media/images/logo.svg"
              alt="Zerodha"
              className="footer-logo"
            />

            <p>© 2010 - 2026, Zerodha Broking Ltd.</p>
            <p>All rights reserved.</p>

            {/* Social Icons */}
            <div className="social-row">

              <span>
                <i className="fa-brands fa-x-twitter"></i>
              </span>

              <span>
                <i className="fa-brands fa-facebook-f"></i>
              </span>

              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>

              <span>
                <i className="fa-brands fa-linkedin-in"></i>
              </span>

            </div>

            <div className="social-divider"></div>

            {/* Second Social Row */}
            <div className="second-social">

              <span>
                <i className="fa-brands fa-youtube"></i>
              </span>

              <span>
                <i className="fa-brands fa-whatsapp"></i>
              </span>

              <span>
                <i className="fa-brands fa-telegram"></i>
              </span>

            </div>

            {/* App Store Buttons */}
            <div className="app-buttons">

              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="app-badge"
              />

              <img
                src="/media/images/appstoreBadge.svg"
                alt="App Store"
                className="app-badge"
              />

            </div>

          </div>


          {/* ================= ACCOUNT ================= */}
          <div className="col-lg-2 col-md-6 footer-column">

            <h5>Account</h5>

            <p>Open demat account</p>
            <p>Minor demat account</p>
            <p>NRI demat account</p>
            <p>HUF demat account</p>
            <p>Commodity</p>
            <p>Dematerialisation</p>
            <p>Fund transfer</p>
            <p>MTF</p>

          </div>


          {/* ================= SUPPORT ================= */}
          <div className="col-lg-2 col-md-6 footer-column">

            <h5>Support</h5>

            <p>Contact us</p>
            <p>Support portal</p>
            <p>How to file a complaint?</p>
            <p>Status of your complaints</p>
            <p>Bulletin</p>
            <p>Circular</p>
            <p>Z-Connect blog</p>
            <p>Downloads</p>

          </div>


          {/* ================= COMPANY ================= */}
          <div className="col-lg-2 col-md-6 footer-column">

            <h5>Company</h5>

            <p>About</p>
            <p>Philosophy</p>
            <p>Press &amp; media</p>
            <p>Careers</p>
            <p>Zerodha Cares (CSR)</p>
            <p>Zerodha.tech</p>
            <p>Open source</p>
            <p>Referral program</p>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div className="col-lg-2 col-md-6 footer-column quick-links-column">

            <h5>Quick links</h5>

            <p>Upcoming IPOs</p>
            <p>Brokerage charges</p>
            <p>Market holidays</p>
            <p>Economic calendar</p>
            <p>Calculators</p>
            <p>Markets</p>
            <p>Sectors</p>
            <p>Gift Nifty</p>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}
        <hr className="footer-divider" />


        {/* ================= DISCLAIMER ================= */}
        <div className="disclaimer">

          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI – SEBI
            Registration no.: INZ00031633 CDSL/NSDL: Depository services through
            Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for
            DP related to dp@zerodha.com. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href="/">
              NSE broker factsheet
            </a>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly
            from Exchange/Depositories on your mobile/email at the end of the
            day. Issued in the interest of investors. KYC is one time exercise
            while dealing in securities markets - once KYC is done through a
            SEBI registered intermediary (broker, DP, Mutual Fund etc.), you
            need not undergo the same process again when you approach another
            intermediary."
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need
            to issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in
            your bank account.
          </p>

          <p>
            As a business we don't give stock tips, and have not authorized
            anyone to trade on behalf of others. If you find anyone claiming
            to be part of Zerodha and offering such services, please{" "}
            <a href="/">
              create a ticket here
            </a>.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tactacial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ00031633) is acting solely as a
            distributor for these products. Any disputes arising with respect
            to such distribution activity will not have access to SEBI
            SCORES/ODR, Exchange Investor Grievance Redressal Forum, or
            Arbitration mechanism. Fixed deposits are regulated by the Reserve
            Bank of India (RBI).
          </p>

        </div>


        {/* ================= BOTTOM LINKS ================= */}
        <div className="bottom-links">

          <a href="/">NSE</a>
          <a href="/">BSE</a>
          <a href="/">MCX</a>
          <a href="/">MSEI</a>
          <a href="/">Terms &amp; conditions</a>
          <a href="/">Policies &amp; procedures</a>
          <a href="/">Privacy policy</a>
          <a href="/">Disclosure</a>
          <a href="/">For investor's attention</a>
          <a href="/">Investor charter</a>
          <a href="/">Sitemap</a>

        </div>

      </div>

    </footer> 
  );
}

export default Footer;