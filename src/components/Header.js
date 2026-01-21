import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ UNIVERSAL Function: works on landing + subpages
  const goToSection = (sectionId) => {
    if (location.pathname === "/") {
      // Already on landing → just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate back to landing
      navigate("/");

      // Wait for page to load → then scroll
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <header className={scroll ? "header header-scroll" : "header"}>
      <div className="header-container">
        <img src={logo} alt="Premier Landscape" className="header-logo" />

        <nav className="nav-menu">
          <span onClick={() => goToSection("home")}>Home</span>
          <span onClick={() => goToSection("about")}>About</span>
          <span onClick={() => goToSection("products")}>Products</span>
          <span onClick={() => goToSection("technologies")}>Technologies</span>
          <span onClick={() => goToSection("services")}>Services</span>
          <span onClick={() => goToSection("contact")}>Contact Us</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;

