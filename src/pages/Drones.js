// src/pages/Drones.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./drones.css";

/* --- HERO IMAGE --- */
import dronesMainImg from "../assets/technologies/drones/drones-main.jpg";

/* --- DRONES USAGE IMAGES (6) --- */
import siteSurveyImg from "../assets/technologies/drones/site-survey.jpg";
import designPlanningImg from "../assets/technologies/drones/design-planning.png";
import inspectionImg from "../assets/technologies/drones/inspection.png";
import projectMonitorImg from "../assets/technologies/drones/project-monitor.png";
import vegetationImg from "../assets/technologies/drones/vegetation.jpeg";
import volumetricImg from "../assets/technologies/drones/volumetric.jpeg";

const Drones = () => {
  return (
    <>
      <Header />

      <main className="drones-wrapper">

        {/* HERO IMAGE */}
        <div className="drones-main-image">
          <img src={dronesMainImg} alt="Drones for Surveying and Inspection" />
          <div className="drones-overlay-title">
            Drones for Surveying & Inspection
          </div>
        </div>

        {/* INTRO */}
        <section className="drones-description">
          <p>
            Drones are a transformative tool for the landscaping industry, providing a faster, safer, more accurate, and cost-effective method for surveying, inspection, planning, and monitoring. They capture high-resolution geospatial data that is used to create detailed 2D maps and 3D models of a site, which can be integrated into design and project management software.
          </p>
        </section>

        {/* DRONES GRID */}
        <section className="drones-grid-six">
          <div className="drones-card">
            <img src={siteSurveyImg} alt="Site Surveying and Mapping" />
            <h3>Site Surveying and Mapping</h3>
            <p>
              Drones equipped with high-resolution RGB cameras or LiDAR sensors can quickly capture data to produce accurate topographic maps, digital surface models (DSM), and digital terrain models (DTM). This data is used to understand the terrain, elevation, and existing structures, eliminating the guesswork of manual measurements.
            </p>
          </div>

          <div className="drones-card">
            <img src={designPlanningImg} alt="Design and Planning" />
            <h3>Design and Planning</h3>
            <p>
              Landscape architects can overlay proposed designs onto detailed drone imagery and 3D models to visualize the final result and ensure the design aligns perfectly with the existing landscape. This helps in planning the placement of features like water elements, pathways, or garden layouts.
            </p>
          </div>

          <div className="drones-card">
            <img src={inspectionImg} alt="Site and Asset Inspection" />
            <h3>Site and Asset Inspection</h3>
            <p>
              Drones can safely access hard-to-reach or hazardous areas like steep slopes, rooftops, or unstable soil to identify potential problems such as poor drainage spots, erosion, or structural defects.
            </p>
          </div>

          <div className="drones-card">
            <img src={projectMonitorImg} alt="Project Monitoring and Quality Control" />
            <h3>Project Monitoring and Quality Control</h3>
            <p>
              Regular drone flights provide a timeline of site conditions, allowing project managers to track progress, compare current conditions with design plans, and identify discrepancies in real-time.
            </p>
          </div>

          <div className="drones-card">
            <img src={vegetationImg} alt="Vegetation and Health Analysis" />
            <h3>Vegetation and Health Analysis</h3>
            <p>
              Using multispectral or thermal sensors, drones can monitor plant health, identify areas of pest infestation or nutrient deficiencies, and optimize irrigation patterns and fertilizer use.
            </p>
          </div>

          <div className="drones-card">
            <img src={volumetricImg} alt="Volumetric Measurement" />
            <h3>Volumetric Measurement</h3>
            <p>
              Drones simplify the calculation of earth moved, material moved, or remaining material stockpiles, which is crucial for budgeting and project management.
            </p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default Drones;
