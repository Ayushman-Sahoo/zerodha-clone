import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>

    <Navbar />

    <Routes>

      {/* HOME */}
      <Route path="/" element={<HomePage />} />

      {/* SIGNUP */}
      <Route path="/signup" element={<Signup />} />

      {/* ABOUT */}
      <Route path="/about" element={<AboutPage />} />

      {/* PRODUCTS */}
      <Route path="/products" element={<ProductsPage />} />

      {/* PRICING */}
      <Route path="/pricing" element={<PricingPage />} />

      {/* SUPPORT */}
      <Route path="/support" element={<SupportPage />} />

      {/* 404 */}
      <Route path="*" element={<h1>404 Not Found</h1>} />

    </Routes>

    <Footer />

  </BrowserRouter>
);