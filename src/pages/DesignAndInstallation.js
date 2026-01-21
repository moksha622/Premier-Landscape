import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./design-and-installation.css";

/* --- HERO IMAGE --- */
import designMainImg from "../assets/services/installation/design-main.jpg";

/* --- 2 IMAGES SECTION --- */
import siteAnalysisImg from "../assets/services/installation/site-analysis.jpg";
import conceptualPlanningImg from "../assets/services/installation/conceptual-planning.jpeg";

/* --- SOFTSCAPING 4 IMAGES --- */
import treeShrubImg from "../assets/services/installation/tree-shrub.jpg";
import flowerBedImg from "../assets/services/installation/flower-bed.png";
import lawnInstallImg from "../assets/services/installation/lawn-install.png";
import mulchingImg from "../assets/services/installation/mulching.jpg";

const DesignAndInstallation = () => {
  return (
    <>
      <Header />

      <main className="design-wrapper">

        {/* HERO IMAGE */}
        <div className="design-main-image">
          <img src={designMainImg} alt="Landscape Design & Installation" />
          <div className="design-overlay-title">
            Design & Installation of Landscape
          </div>
        </div>

        {/* INTRO */}
        <section className="design-description">
          <p>
            Landscape design and installation services encompass a wide range of
            activities that transform outdoor spaces into functional, beautiful
            environments.
          </p>
        </section>

        {/* TWO-ITEM GRID */}
        <section className="design-grid-two">

          <div className="design-card">
            <img src={siteAnalysisImg} alt="Site Analysis" />
            <h3>Site analysis and consultation</h3>
            <p>
              Assessing existing conditions, soil quality, climate, and client
              needs/preferences.
            </p>
          </div>

          <div className="design-card">
            <img src={conceptualPlanningImg} alt="Conceptual Planning" />
            <h3>Conceptual planning</h3>
            <p>
              Developing initial ideas and themes through sketches and 3D renderings
              to guide the project.
            </p>
          </div>

        </section>

        {/* SOFTSCAPING SUBTITLE */}
        <section className="design-subtitle">
  <span className="yellow-line">|</span> Softscaping (Living elements)
</section>


        {/* FOUR-ITEM GRID */}
        <section className="design-grid-four">

          <div className="design-card">
            <img src={treeShrubImg} alt="Tree & Shrub Planting" />
            <h3>Tree and shrub planting</h3>
            <p>
              Strategic placement of trees, shrubs, and hedges for shade, privacy,
              and curb appeal.
            </p>
          </div>

          <div className="design-card">
            <img src={flowerBedImg} alt="Flower Bed Installation" />
            <h3>Flower bed installation</h3>
            <p>
              Designing and planting annuals, perennials, and seasonal flowers.
            </p>
          </div>

          <div className="design-card">
            <img src={lawnInstallImg} alt="Lawn Installation" />
            <h3>Lawn installation</h3>
            <p>
              Laying sod, installing artificial turf, or hydroseeding for a new lawn.
            </p>
          </div>

          <div className="design-card">
            <img src={mulchingImg} alt="Mulching" />
            <h3>Mulching</h3>
            <p>
              Applying mulch to garden beds to retain moisture, suppress weeds, and
              improve soil health.
            </p>
          </div>

        </section>

      </main>

      
    </>
  );
};

export default DesignAndInstallation;
