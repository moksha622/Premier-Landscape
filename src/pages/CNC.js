// src/pages/CNC.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./cnc.css";

/* --- HERO IMAGE --- */
import cncMainImg from "../assets/technologies/cnc/cnc-main.jpg";

/* --- CNC MACHINE IMAGES (4) --- */
import blueElephantImg from "../assets/technologies/cnc/blue-elephant.jpg";
import forsunImg from "../assets/technologies/cnc/forsun.jpg";
import styleCncImg from "../assets/technologies/cnc/stylecnc.jpg";
import thibautImg from "../assets/technologies/cnc/thibaut.jpeg";

const CNC = () => {
  return (
    <>
      <Header />

      <main className="cnc-wrapper">

        {/* HERO IMAGE */}
        <div className="cnc-main-image">
          <img src={cncMainImg} alt="CNC Machines for Stone Cutting" />
          <div className="cnc-overlay-title">CNC Machines for Stone Cutting</div>
        </div>

        {/* INTRO */}
        <section className="cnc-description">
          <p>
            Several types of CNC machines are suitable for cutting and shaping stone for landscaping, ranging from large industrial-grade bridge saws to smaller, more affordable routers. The best option depends on your project size, budget, and material needs.
          </p>
        </section>

        {/* CNC MACHINES GRID */}
        <section className="cnc-grid-four">
          <div className="cnc-card">
            <img src={blueElephantImg} alt="Blue Elephant Stone CNC Router" />
            <h3>Blue Elephant Stone CNC Router</h3>
            <p>
              Blue Elephant offers multiple models of stone CNC routers for engraving, cutting, and polishing a variety of stone materials. A customer review on BuyCNC praises a large router for its ability to handle thick stones and complex 3D carvings.
            </p>
          </div>

          <div className="cnc-card">
            <img src={forsunImg} alt="FORSUN Precision CNC" />
            <h3>FORSUN Precision CNC</h3>
            <p>
              This machine is designed for both cutting and intricate engraving, with a working area of approximately 51 x 98 x 8 inches. It is well-suited for shaping softer stone and materials like onyx, travertine, and artificial stone.
            </p>
          </div>

          <div className="cnc-card">
            <img src={styleCncImg} alt="StyleCNC STS1325" />
            <h3>StyleCNC STS1325</h3>
            <p>
              This 4' x 8' router is designed for business owners who need a powerful yet affordable CNC machine for stone machining and decorative applications. It features a robust construction and a water-cooling system to improve tool lifespan.
            </p>
          </div>

          <div className="cnc-card">
            <img src={thibautImg} alt="Thibaut TC625" />
            <h3>Thibaut TC625</h3>
            <p>
              Known for robustness, this 5-axis CNC bridge saw can be paired with a Thibaut machining center for a complete finishing process, including milling, drilling, and polishing.
            </p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default CNC;
