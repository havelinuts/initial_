import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServicePage from "./ServicePage";
import ProductPage from "./ProductPage";
import ContactUs from "./ContactUs";
import "./HomePage.css";

const HomePage = () => (
  <div className="homepage-container">
    <Header />
    {/* Hero or main headline section */}
    <section id="home" className="headline-section">
      <h1>FLOURISHING TOGETHER</h1>
      <h2 className="subheadline">DELIVERING QUALITY PRODUCTS AROUND THE WORLD</h2>
    </section>
    {/* Services Section */}
    <section id="services">
      <ServicePage />
    </section>
    {/* Products Section */}
    <section id="products">
      <ProductPage />
    </section>
    {/* Contact Us Section */}
    <section id="contact">
      <ContactUs />
    </section>
    <Footer />
  </div>
);

export default HomePage;