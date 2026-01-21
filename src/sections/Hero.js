import React from "react";
import "./Hero.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <h1>Preliminary Web Page for Premier Landscape</h1>
        <div className="hero-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;



