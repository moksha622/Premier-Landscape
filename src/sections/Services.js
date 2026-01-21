import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

// Correct image imports
import designImg from "../assets/services/Design and installation of landscape.jpg";
import lawnImg from "../assets/services/Lawn maintenance.jpeg";
import gardeningImg from "../assets/services/Gardening and planting.png";
import treeImg from "../assets/services/Tree and shrub care.jpeg";
import hardscapingImg from "../assets/services/Garden edging and hardscaping.jpg";
import seasonalImg from "../assets/services/Seasonal services.jpeg";

const Services = () => {
  const services = [
    { name: "Design and Installation of Landscape", img: designImg, link: "/design-and-installation" },
    { name: "Lawn Maintenance", img: lawnImg, link: "/lawn-maintenance" },
    { name: "Gardening and Planting", img: gardeningImg, link: "/gardening-and-planting" },
    { name: "Tree and Shrub Care", img: treeImg, link: "/tree-and-shrub-care" },
    { name: "Hardscaping", img: hardscapingImg, link: "/hardscaping" },
    { name: "Seasonal Services", img: seasonalImg, link: "/seasonal-services" },
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="services-heading">Services</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-card">
            <div className="service-image-wrapper">
              <img src={service.img} alt={service.name} className="service-image" />
            </div>
            <span className="service-name">{service.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
