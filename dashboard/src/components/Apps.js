import React from "react";

const Apps = () => {
<<<<<<< HEAD
  return <h1>Apps</h1>;
};

export default Apps;
=======
  return (
    <div className="apps-page">
      <h1>Apps</h1>
      <p className="apps-subtitle">
        Explore useful tools and applications for your trading experience.
      </p>

      <div className="apps-grid">

        <div className="app-card">
          <div className="app-icon">📊</div>
          <h2>TradingView</h2>
          <p>
            Analyze stocks with advanced charts, indicators and market tools.
          </p>
          <button>Explore</button>
        </div>

        <div className="app-card">
          <div className="app-icon">📈</div>
          <h2>Market Watch</h2>
          <p>
            Track your favorite stocks and monitor their latest prices.
          </p>
          <button>Open</button>
        </div>

        <div className="app-card">
          <div className="app-icon">💰</div>
          <h2>Portfolio</h2>
          <p>
            View your holdings, investments and overall portfolio performance.
          </p>
          <button>View Portfolio</button>
        </div>

        <div className="app-card">
          <div className="app-icon">📋</div>
          <h2>Orders</h2>
          <p>
            Check your completed, pending and cancelled orders.
          </p>
          <button>View Orders</button>
        </div>

        <div className="app-card">
          <div className="app-icon">📰</div>
          <h2>Market News</h2>
          <p>
            Stay updated with important stock market information.
          </p>
          <button>Read News</button>
        </div>

        <div className="app-card">
          <div className="app-icon">⚙️</div>
          <h2>Settings</h2>
          <p>
            Manage your profile and application preferences.
          </p>
          <button>Settings</button>
        </div>

      </div>
    </div>
  );
};

export default Apps;
>>>>>>> da31f39 (Updated Zerodha clone)
