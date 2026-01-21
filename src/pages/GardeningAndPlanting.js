import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./GardeningAndPlanting.css";

/* --- HERO IMAGE --- */
import gardeningMainImg from "../assets/services/gardening/gardening-main.jpg";

/* --- DESIGN & INSTALLATION IMAGES (4) --- */
import landscapeDesignImg from "../assets/services/gardening/landscape-design.jpg";
import treeShrubPlantingImg from "../assets/services/gardening/tree-shrub-planting.jpg";
import flowerBedImg from "../assets/services/gardening/flower-bed.jpeg";
import soddingImg from "../assets/services/gardening/sodding.jpg";

/* --- MAINTENANCE & CARE IMAGES (8) --- */
import gardenMaintenanceImg from "../assets/services/gardening/garden-maintenance.jpg";
import pruningImg from "../assets/services/gardening/pruning.png";
import mulchingImg from "../assets/services/gardening/mulching.jpeg";
import lawnCareImg from "../assets/services/gardening/lawn-care.png";
import irrigationImg from "../assets/services/gardening/irrigation.png";
import pestControlImg from "../assets/services/gardening/pest-control.jpeg";
import seasonalCleanupImg from "../assets/services/gardening/seasonal-cleanup.jpg";
import plantSourcingImg from "../assets/services/gardening/plant-sourcing.jpeg";

const GardeningAndPlanting = () => {
  return (
    <>
      <Header />

      <main className="gardening-wrapper">

        {/* HERO IMAGE */}
        <div className="gardening-main-image">
          <img src={gardeningMainImg} alt="Gardening and Planting" />
          <div className="gardening-overlay-title">Gardening & Planting</div>
        </div>

        {/* INTRO */}
        <section className="gardening-description">
          <p>
            Gardening and planting services are core components of landscaping, falling under the umbrella of "softscaping" which deals with living elements.
          </p>
        </section>

        {/* DESIGN & INSTALLATION */}
        <section className="gardening-section-title">| Design & Installation</section>
        <section className="gardening-grid-four">
          <div className="gardening-card">
            <img src={landscapeDesignImg} alt="Landscape Design" />
            <h3>Landscape Design</h3>
            <p>Professional planning of the entire outdoor space, including the selection, arrangement, and strategic placement of plants, trees, and flowers.</p>
          </div>
          <div className="gardening-card">
            <img src={treeShrubPlantingImg} alt="Tree and Shrub Planting" />
            <h3>Tree and Shrub Planting</h3>
            <p>Selecting and installing appropriate trees and shrubs to add shade, privacy, and structure to the landscape.</p>
          </div>
          <div className="gardening-card">
            <img src={flowerBedImg} alt="Flower Bed Creation" />
            <h3>Flower Bed Creation & Border Planting</h3>
            <p>Designing and installing new garden beds with a variety of annuals, perennials, and groundcovers for seasonal color and visual interest.</p>
          </div>
          <div className="gardening-card">
            <img src={soddingImg} alt="Sodding & Lawn Installation" />
            <h3>Sodding & Lawn Installation</h3>
            <p>Laying pre-grown grass rolls or squares for an instant lawn or performing seeding and hydroseeding for new turf areas.</p>
          </div>
        </section>

        {/* MAINTENANCE & CARE */}
        <section className="gardening-section-title">| Maintenance & Care</section>
        <section className="gardening-grid-eight">
          <div className="gardening-card">
            <img src={gardenMaintenanceImg} alt="Garden Maintenance" />
            <h3>Garden Maintenance</h3>
            <p>Regular care for garden beds, including weeding, debris removal, ground-cover control, and removal of spent blooms.</p>
          </div>
          <div className="gardening-card">
            <img src={pruningImg} alt="Pruning and Hedging" />
            <h3>Pruning and Hedging</h3>
            <p>Trimming and shaping hedges, shrubs, and trees to maintain their health, shape, and appearance.</p>
          </div>
          <div className="gardening-card">
            <img src={mulchingImg} alt="Mulching and Soil Management" />
            <h3>Mulching and Soil Management</h3>
            <p>Applying mulch to garden beds to retain moisture, suppress weeds, and improve soil fertility.</p>
          </div>
          <div className="gardening-card">
            <img src={lawnCareImg} alt="Lawn Care" />
            <h3>Lawn Care</h3>
            <p>Comprehensive maintenance including mowing, fertilizing, aeration, overseeding, and weed control for a healthy lawn.</p>
          </div>
          <div className="gardening-card">
            <img src={irrigationImg} alt="Irrigation System Management" />
            <h3>Irrigation System Management</h3>
            <p>Designing, installing, and maintaining efficient watering solutions to ensure proper hydration for all plants.</p>
          </div>
          <div className="gardening-card">
            <img src={pestControlImg} alt="Pest and Disease Control" />
            <h3>Pest and Disease Control</h3>
            <p>Identifying and treating plant issues using integrated pest management strategies, including organic methods.</p>
          </div>
          <div className="gardening-card">
            <img src={seasonalCleanupImg} alt="Seasonal Cleanups" />
            <h3>Seasonal Cleanups</h3>
            <p>Thorough spring and fall cleanups, clearing leaves, dead branches, and preparing the landscape for the season.</p>
          </div>
          <div className="gardening-card">
            <img src={plantSourcingImg} alt="Plant Sourcing/Consultancy" />
            <h3>Plant Sourcing/Consultancy</h3>
            <p>Providing expertise on plant selection based on climate, soil type, and aesthetic preferences.</p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default GardeningAndPlanting;
