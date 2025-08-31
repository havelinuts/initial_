import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/ContactUs";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Services" element={<ServicePage />} />
      <Route path="/products" element={<ProductPage />} /> {/* Fixed here */}
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </Router>
);

export default App;