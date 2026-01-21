import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./LawnMaintenance.css";

/* --- HERO IMAGE --- */
import lawnMainImg from "../assets/services/lawn/lawn-main.jpg";

/* --- CORE LAWN MAINTENANCE IMAGES --- */
import mowingImg from "../assets/services/lawn/mowing.jpg";
import edgingImg from "../assets/services/lawn/edging.jpg";
import stringTrimmingImg from "../assets/services/lawn/trimming.jpg";

/* --- LAWN HEALTH AND TREATMENTS IMAGES --- */
import fertilizationImg from "../assets/services/lawn/fertilization.jpg";
import weedControlImg from "../assets/services/lawn/weed-control.png";
import aerationImg from "../assets/services/lawn/aeration.png";
import overseedingImg from "../assets/services/lawn/overseeding.jpg";
import wateringImg from "../assets/services/lawn/irrigation.jpg";

/* --- SEASONAL AND INTEGRATED SERVICES IMAGES --- */
import cleanupImg from "../assets/services/lawn/cleanup.jpg";
import mulchingImg from "../assets/services/lawn/mulching.jpg";
import treeShrubCareImg from "../assets/services/lawn/shrub-care.jpeg";

const LawnMaintenance = () => {
  return (
    <>
      <Header />

      <main className="lawn-wrapper">

        {/* HERO IMAGE */}
        <div className="lawn-main-image">
          <img src={lawnMainImg} alt="Lawn Maintenance" />
          <div className="lawn-overlay-title">Lawn Maintenance</div>
        </div>

        {/* INTRO */}
        <section className="lawn-description">
          <p>
            Lawn maintenance services offered as part of a landscape maintenance plan go beyond basic mowing and aim to preserve the health and appearance of the entire outdoor space.
          </p>
        </section>

        {/* CORE LAWN MAINTENANCE */}
        <section className="lawn-section-title">| Core Lawn Maintenance Tasks</section>
        <section className="lawn-grid-three">
          <div className="lawn-card">
            <img src={mowingImg} alt="Mowing" />
            <h3>Mowing</h3>
            <p>Regular cutting of the grass to a seasonally appropriate height to promote healthy growth.</p>
          </div>
          <div className="lawn-card">
            <img src={edgingImg} alt="Edging" />
            <h3>Edging</h3>
            <p>Trimming the borders along driveways, sidewalks, patios, and garden beds to create a clean, manicured line.</p>
          </div>
          <div className="lawn-card">
            <img src={stringTrimmingImg} alt="String Trimming" />
            <h3>String Trimming (Weed-eating)</h3>
            <p>Trimming grass in hard-to-reach areas around obstacles like trees, fences, and lawn ornaments.</p>
          </div>
        </section>

        {/* LAWN HEALTH AND TREATMENTS */}
        <section className="lawn-section-title">| Lawn Health and Treatments</section>
        <section className="lawn-grid-five">
          <div className="lawn-card">
            <img src={fertilizationImg} alt="Fertilization" />
            <h3>Fertilization</h3>
            <p>Applying essential nutrients to the soil to promote a lush, green, and healthy lawn.</p>
          </div>
          <div className="lawn-card">
            <img src={weedControlImg} alt="Weed Control" />
            <h3>Weed Control</h3>
            <p>Using pre-emergent and post-emergent herbicides, or manual weeding, to eliminate unwanted plants that compete with the grass for resources.</p>
          </div>
          <div className="lawn-card">
            <img src={aerationImg} alt="Aeration" />
            <h3>Aeration</h3>
            <p>Perforating the soil with small holes to reduce compaction, allowing air, water, and nutrients to reach the roots more effectively.</p>
          </div>
          <div className="lawn-card">
            <img src={overseedingImg} alt="Overseeding" />
            <h3>Overseeding</h3>
            <p>Spreading new grass seed over existing turf to fill in bare spots and improve lawn density.</p>
          </div>
          <div className="lawn-card">
            <img src={wateringImg} alt="Watering/Irrigation" />
            <h3>Watering/Irrigation Management</h3>
            <p>Ensuring proper and efficient water distribution, including system maintenance, start-ups, and winterization.</p>
          </div>
        </section>

        {/* SEASONAL AND INTEGRATED SERVICES */}
        <section className="lawn-section-title">| Seasonal and Integrated Services</section>
        <section className="lawn-grid-three">
          <div className="lawn-card">
            <img src={cleanupImg} alt="Spring & Fall Cleanups" />
            <h3>Spring and Fall Cleanups</h3>
            <p>Thorough cleaning of the yard to remove accumulated debris, prepare garden beds, and get the landscape ready for the upcoming season.</p>
          </div>
          <div className="lawn-card">
            <img src={mulchingImg} alt="Mulching" />
            <h3>Mulching</h3>
            <p>Applying mulch to garden beds to retain soil moisture, suppress weeds, and enhance aesthetic appeal.</p>
          </div>
          <div className="lawn-card">
            <img src={treeShrubCareImg} alt="Tree & Shrub Care" />
            <h3>Tree and Shrub Care</h3>
            <p>Pruning and trimming small trees and shrubs to maintain their shape, size, and health.</p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default LawnMaintenance;
