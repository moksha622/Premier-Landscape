import React from "react";
import { Link } from "react-router-dom";
import "./Technologies.css";

// Correct image imports
import irrigationImg from "../assets/technologies/irrigation.jpeg";
import automationImg from "../assets/technologies/automation.jpg";
import drainageImg from "../assets/technologies/drainage.jpeg";
import lightingImg from "../assets/technologies/lighting.png";
import fertilizationImg from "../assets/technologies/fertilization.jpeg";
import surveyingImg from "../assets/technologies/surveying.jpeg";

const Technologies = () => {
  const technologies = [
    { name: "Extrusion for Concrete Walls and Kerbs", img: irrigationImg, link: "/kerbs" },
    { name: "Vacuum Systems for Placing Soil and Mulch", img: automationImg, link: "/mulch" },
    { name: "Paver Laying Machines", img: drainageImg, link: "/paver-laying" },
    { name: "CNC Machines for Stone Cutting", img: lightingImg, link: "/cnc" },
    { name: "Drones for Surveying and Inspection", img: fertilizationImg, link: "/drones" },
    { name: "Plant Biotechnology", img: surveyingImg, link: "/plant" },
  ];

  return (
    <section className="technologies-section" id="technologies">
      <h2 className="technologies-heading">Technologies</h2>

      <div className="technologies-grid">
        {technologies.map((tech, index) => (
          <Link to={tech.link} key={index} className="technology-card">
            <div className="technology-image-wrapper">
              <img src={tech.img} alt={tech.name} className="technology-image" />
            </div>
            <span className="technology-name">{tech.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
