import React from "react";
import "./HomePage.css";
import logo from "./logo .jpg"; // Replace with your actual logo path if needed

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Background video or image */}
      <div className="background-media">
        {/* If you have a video, use <video> tag. For now, using a placeholder image. */}
        {/* <video autoPlay loop muted className="background-video">
          <source src="/path/to/your/video.mp4" type="video/mp4" />
        </video> */}
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" alt="background" className="background-image" />
      </div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="SouthernBay Logo" />
          <span className="logo-text">SouthernBay<br /><span className="logo-sub">flourishing together</span></span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#products">PRODUCTS</a></li>
          <li><a href="#contact">CONTACT US</a></li>
          <li><a href="#media">MEDIA GALLERY</a></li>
          <li><a href="#blog">BLOG</a></li>
        </ul>
      </nav>
      {/* Headline Section */}
      <div className="headline-section">
        <h1>FLOURISHING TOGETHER</h1>
        <h2 className="subheadline">DELIVERING QUALITY PRODUCTS AROUND THE WORLD</h2>
      </div>
    </div>
  );
};

export default HomePage;
