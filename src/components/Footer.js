import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Footer.css";

// Social icons
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import youtubeIcon from "../assets/icons/youtube.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll logic shared with navbar
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* 1 — Contact Info */}
        <div className="footer-section">
          <h3 className="footer-title">Premier Landscape</h3>
          <p>Dedicated to outdoor landscape</p>
          <p>123 Premier Street, Colombo, Sri Lanka</p>
          <p>Phone: +94 77 123 4567</p>
          <p>Email: premierlandscape@gmail.com</p>

          <div className="social-icons">
            <a href="#" target="_blank">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" target="_blank">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" target="_blank">
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>

        {/* 2 — Our Links (scroll links) */}
        <div className="footer-section">
          <h3 className="footer-title">Our Links</h3>

          <button className="footer-link-btn" onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button className="footer-link-btn" onClick={() => scrollToSection("about")}>
            About
          </button>

          <button className="footer-link-btn" onClick={() => scrollToSection("products")}>
            Products
          </button>

          <button className="footer-link-btn" onClick={() => scrollToSection("technologies")}>
            Technology Sales
          </button>

          <button className="footer-link-btn" onClick={() => scrollToSection("services")}>
            Services
          </button>

          <button className="footer-link-btn" onClick={() => scrollToSection("contact")}>
            Contact Us
          </button>
        </div>

        {/* 3 — Product Pages */}
        <div className="footer-section">
          <h3 className="footer-title">Products</h3>
          <Link to="/pavers-and-stones">Pavers and Stones</Link>
          <Link to="/plants-and-trees-and-sod">Plants and Trees and Sod</Link>
          <Link to="/mulch-and-compost">Mulch and Compost</Link>
          <Link to="/soil-and-sand">Soil and Sand</Link>
          <Link to="/garden-edging-and-wall-blocks">Garden Edging and Wall Blocks</Link>
          <Link to="/outdoor-structures">Outdoor Structures</Link>
        </div>

        {/* 4 — Service Pages */}
        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <Link to="/design-and-installation">Design and Installation of Landscape</Link>
          <Link to="/lawn-maintenance">Lawn Maintenance</Link>
          <Link to="/gardening-and-planting">Gardening and Planting</Link>
          <Link to="/tree-and-shrub-care">Tree and Shrub Care</Link>
          <Link to="/hardscaping">Hardscaping</Link>
          <Link to="/seasonal-services">Seasonal Services</Link>
        </div>

        {/* 5 — Contact Pages */}
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>

          <Link to="/pavers-contact">Pavers and Stones</Link>
          <Link to="/plants-contact">Plants and Trees and Sod</Link>
          <Link to="/mulch-contact">Mulch and Compost</Link>
          <Link to="/soil-contact">Soil and Sand</Link>
          <Link to="/garden-contact">Garden Edging and Wall Blocks</Link>
          <Link to="/outdoor-contact">Outdoor Structures</Link>

          <Link to="/technology-contact">Technology Contact</Link>
          <Link to="/services-contact">Services Contact</Link>
          <Link to="/management-contact">Management Contact</Link>
          <Link to="/locations-contact">Locations Contact</Link>
        </div>

      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Premier Landscape — All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;

