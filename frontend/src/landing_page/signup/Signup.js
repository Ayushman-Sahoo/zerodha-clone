import React, { useState } from "react";

function Signup() {
  const [mobile, setMobile] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    setStep(2);
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    alert("Mobile number verified!");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-logo">
          <h2>zerodha</h2>
        </div>

        {step === 1 && (
          <>
            <h1>Open a Zerodha account</h1>

            <p className="signup-subtitle">
              Modern platforms and apps, ₹0 investments, and flat ₹20
              intraday and F&O trades.
            </p>

            <form onSubmit={handleContinue}>
              <label htmlFor="mobile">Mobile number</label>

              <div className="mobile-input">
                <span>+91</span>

                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value.replace(/\D/g, ""))
                  }
                  maxLength="10"
                />
              </div>

              <button type="submit" className="signup-btn">
                Continue
              </button>
            </form>

            <p className="signup-terms">
              By continuing, you agree to the Terms & Conditions and
              Privacy Policy.
            </p>

            <div className="signup-divider">
              <span>OR</span>
            </div>

            <button className="google-btn" type="button">
              Continue with Google
            </button>

            <p className="login-text">
              Already have an account?{" "}
              <a href="/login">Login</a>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <h1>Verify your mobile number</h1>

            <p className="signup-subtitle">
              Enter the 6-digit OTP sent to
              <br />
              +91 {mobile}
            </p>

            <form onSubmit={handleVerify}>
              <label htmlFor="otp">Enter OTP</label>

              <input
                type="text"
                id="otp"
                className="otp-input"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, ""))
                }
                maxLength="6"
              />

              <button type="submit" className="signup-btn">
                Verify & Continue
              </button>
            </form>

            <button
              type="button"
              className="back-btn"
              onClick={() => {
                setStep(1);
                setOtp("");
              }}
            >
              Change mobile number
            </button>

            <p className="resend-text">
              Didn't receive the OTP?{" "}
              <button type="button" className="resend-btn">
                Resend OTP
              </button>
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default Signup;