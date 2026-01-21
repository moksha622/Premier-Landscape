// src/pages/Vacuum.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./vacuum.css";

/* --- HERO IMAGE --- */
import vacuumMainImg from "../assets/technologies/vacuum/vacuum-main.jpg";

/* --- COMMERCIAL-GRADE BLOWER IMAGES (3) --- */
import finnImg from "../assets/technologies/vacuum/finn.jpg";
import expressImg from "../assets/technologies/vacuum/express.jpeg";
import mulchMuleImg from "../assets/technologies/vacuum/mulch-mul.png";

/* --- RESIDENTIAL/SML BLOWER IMAGES (2) --- */
import portableImg from "../assets/technologies/vacuum/portable.jpeg";
import trifacImg from "../assets/technologies/vacuum/trivac.jpg";

const Vacuum = () => {
  return (
    <>
      <Header />

      <main className="vacuum-wrapper">

        {/* HERO IMAGE */}
        <div className="vacuum-main-image">
          <img src={vacuumMainImg} alt="Vacuum Systems for Placing Soil and Mulch" />
          <div className="vacuum-overlay-title">
            Vacuum Systems for Placing Soil & Mulch
          </div>
        </div>

        {/* INTRO */}
        <section className="vacuum-description">
          <p>
            For applying soil and mulch in landscaping, the equipment is typically called a mulch blower 
            or material blower, and it uses air pressure to propel materials rather than a vacuum. 
            These systems offer greater efficiency and precision for spreading bulk materials like mulch, 
            wood chips, and soil blends than manual methods.
          </p>
        </section>

        {/* COMMERCIAL-GRADE BLOWER SYSTEMS */}
        <section className="vacuum-description">
          <h2 className="vacuum-section-title">Commercial-grade Blower Systems</h2>
        </section>

        <section className="vacuum-grid-three">
          <div className="vacuum-card">
            <img src={finnImg} alt="Finn Material Blowers" />
            <h3>Finn Material Blowers</h3>
            <p>
              Finn Corporation manufactures a variety of high-performance blower systems.
            </p>
          </div>

          <div className="vacuum-card">
            <img src={expressImg} alt="Express Mulcher" />
            <h3>Express Mulcher</h3>
            <p>
              An entry-level blower truck that efficiently hauls and spreads large quantities of processed mulches, wood chips, and lightweight compost.
            </p>
          </div>

          <div className="vacuum-card">
            <img src={mulchMuleImg} alt="Mulch Mule" />
            <h3>Mulch Mule</h3>
            <p>
              A multi-purpose trailer with a robust 15-cubic-yard hopper for handling bulk materials and a quick-discharge system for rapid unloading.
            </p>
          </div>
        </section>

        {/* RESIDENTIAL AND SMALL-SCALE BLOWER SYSTEMS */}
        <section className="vacuum-description">
          <h2 className="vacuum-section-title">Residential and Small-scale Blower Systems</h2>
        </section>

        <section className="vacuum-grid-two">
          <div className="vacuum-card">
            <img src={portableImg} alt="Portable Units" />
            <h3>Portable Units</h3>
            <p>
              Rentals are often available from equipment suppliers like Sunbelt Rentals, offering a smaller-capacity, walk-behind alternative to larger commercial models.
            </p>
          </div>

          <div className="vacuum-card">
            <img src={trifacImg} alt="Combination Leaf Blower/Vacuums" />
            <h3>Combination Leaf Blower/Vacuums</h3>
            <p>
              Some handheld tools, such as the Worx WG512 Trivac Electric 3-in-1, can switch between blowing and mulching leaves and other light debris.
            </p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default Vacuum;
