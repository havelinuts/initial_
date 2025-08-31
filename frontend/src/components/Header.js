import React from "react";
import { Link } from "react-router-dom";
import logo from "../templates/logo.jpg";

const Header = () => (
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="SouthernBay Logo" />
      <span className="logo-text">
        SouthernBay<br />
        <span className="logo-sub">flourishing together</span>
      </span>
    </div>
    <ul className="nav-links">
      <li><Link to="/">HOME</Link></li>
      <li><Link to="/services">SERVICES</Link></li>
      <li><Link to="/products">PRODUCTS</Link></li>
      <li><Link to="/contact">CONTACT US</Link></li>
      <li><a href="#media">MEDIA GALLERY</a></li>
      <li><a href="#blog">BLOG</a></li>
    </ul>
  </nav>
);

export default Header;