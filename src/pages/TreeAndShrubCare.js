import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./TreeAndShrubCare.css";

/* --- HERO IMAGE --- */
import shrubMainImg from "../assets/services/shrub/shrub-main.jpg";

/* --- MAINTENANCE & HEALTH IMAGES (2) --- */
import pruningImg from "../assets/services/shrub/pruning.jpg";
import fertilizationImg from "../assets/services/shrub/fertilization.jpeg";

/* --- CORRECTIVE & SAFETY IMAGES (3) --- */
import removalImg from "../assets/services/shrub/removal.jpeg";
import stumpImg from "../assets/services/shrub/stump.jpeg";
import hazardImg from "../assets/services/shrub/hazard.jpeg";

/* --- PLANNING & INSTALLATION IMAGES (2) --- */
import plantingImg from "../assets/services/shrub/planting.jpeg";
import consultationImg from "../assets/services/shrub/consultation.jpeg";

const TreeAndShrubCare = () => {
  return (
    <>
      <Header />

      <main className="shrub-wrapper">

        {/* HERO IMAGE */}
        <div className="shrub-main-image">
          <img src={shrubMainImg} alt="Tree and Shrub Care" />
          <div className="shrub-overlay-title">Tree & Shrub Care</div>
        </div>

        {/* INTRO */}
        <section className="shrub-description">
          <p>
            Tree and shrub care services offered by landscaping companies focus on maintaining plant health, safety, and aesthetic appeal.
          </p>
        </section>

        {/* MAINTENANCE & HEALTH */}
        <section className="shrub-section-title">| Maintenance and Health Management</section>
        <section className="shrub-grid-two">
          <div className="shrub-card">
            <img src={pruningImg} alt="Pruning and Trimming" />
            <h3>Pruning and Trimming</h3>
            <p>Removal of dead, diseased, or overgrown branches to encourage healthy growth and maintain shape.</p>
          </div>
          <div className="shrub-card">
            <img src={fertilizationImg} alt="Fertilization" />
            <h3>Fertilization</h3>
            <p>Applying essential nutrients, often through deep-root injections, to promote robust growth and resistance to stress.</p>
          </div>
        </section>

        {/* CORRECTIVE & SAFETY */}
        <section className="shrub-section-title">| Corrective and Safety Services</section>
        <section className="shrub-grid-three">
          <div className="shrub-card">
            <img src={removalImg} alt="Tree and Shrub Removal" />
            <h3>Tree and Shrub Removal</h3>
            <p>Safely removing dead, hazardous, or unwanted trees and shrubs that pose a risk to property or people.</p>
          </div>
          <div className="shrub-card">
            <img src={stumpImg} alt="Stump Grinding" />
            <h3>Stump Grinding</h3>
            <p>Removing the remaining stump after a tree has been cut down for clearance or new planting.</p>
          </div>
          <div className="shrub-card">
            <img src={hazardImg} alt="Hazard Mitigation" />
            <h3>Hazard Mitigation & Storm Prep</h3>
            <p>Identifying risks like weak branches and taking preventative measures to protect against storm damage.</p>
          </div>
        </section>

        {/* PLANNING & INSTALLATION */}
        <section className="shrub-section-title">| Planning and Installation</section>
        <section className="shrub-grid-two">
          <div className="shrub-card">
            <img src={plantingImg} alt="Planting Services" />
            <h3>Planting Services</h3>
            <p>Assisting with selection, strategic placement, and installation of new trees and shrubs to enhance landscape design.</p>
          </div>
          <div className="shrub-card">
            <img src={consultationImg} alt="Consultation and Evaluation" />
            <h3>Consultation and Evaluation</h3>
            <p>Providing professional assessments and developing tailored care plans for the landscape.</p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default TreeAndShrubCare;
