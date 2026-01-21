// src/pages/Kerbs.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./kerbs.css";

/* --- HERO IMAGE --- */
import extrusionMainImg from "../assets/technologies/kerbs/extrusion-main.jpg";

/* --- KERBS IMAGES (3) --- */
import gardenBedImg from "../assets/technologies/kerbs/garden-bed.jpeg";
import walkwayImg from "../assets/technologies/kerbs/walkway.jpg";
import poolImg from "../assets/technologies/kerbs/pool.jpeg";

/* --- WALLS IMAGES (3) --- */
import retainingImg from "../assets/technologies/kerbs/retaining.jpg";
import modularImg from "../assets/technologies/kerbs/modular.jpeg";
import noiseBarrierImg from "../assets/technologies/kerbs/noise-barrier.jpg";

const Kerbs = () => {
  return (
    <>
      <Header />

      <main className="kerbs-wrapper">

        {/* HERO IMAGE */}
        <div className="kerbs-main-image">
          <img src={extrusionMainImg} alt="Extrusion for Concrete Walls and Kerbs" />
          <div className="kerbs-overlay-title">Extrusion for Concrete Walls & Kerbs</div>
        </div>

        {/* INTRO */}
        <section className="kerbs-description">
          <p>
            Extrusion is a manufacturing process that forces a formable material through a die
            to create objects with a specific cross-section. In the context of concrete, this
            technology is used to produce landscape elements like continuous kerbs and precast
            wall panels. The machinery, often called a slipform paver or extruder, moves continuously,
            shaping the concrete as it is deposited on-site. For precast panels, the process occurs
            in a factory setting.
          </p>
        </section>

        {/* KERBS SECTION */}
        <section className="kerbs-description">
          <h2 className="kerbs-section-title">Kerbs</h2>
        </section>

        <section className="kerbs-grid-three">
          <div className="kerbs-card">
            <img src={gardenBedImg} alt="Garden and Flower Beds" />
            <h3>Garden & Flower Beds</h3>
            <p>
              Creates decorative and functional borders that contain mulch and soil.
            </p>
          </div>

          <div className="kerbs-card">
            <img src={walkwayImg} alt="Walkways and Driveways" />
            <h3>Walkways & Driveways</h3>
            <p>
              Provides durable and aesthetically pleasing edging that prevents erosion.
            </p>
          </div>

          <div className="kerbs-card">
            <img src={poolImg} alt="Pool Areas" />
            <h3>Pool Areas</h3>
            <p>
              Creates a seamless, safe, and stylish border around pools.
            </p>
          </div>
        </section>

        {/* WALLS SECTION */}
        <section className="kerbs-description">
          <h2 className="kerbs-section-title">Walls</h2>
        </section>

        <section className="kerbs-grid-three">
          <div className="kerbs-card">
            <img src={retainingImg} alt="Retaining Walls" />
            <h3>Retaining Walls</h3>
            <p>
              For stabilizing sloped landscapes and controlling water flow.
            </p>
          </div>

          <div className="kerbs-card">
            <img src={modularImg} alt="Modular Buildings" />
            <h3>Modular Buildings</h3>
            <p>
              Extruded precast wall panels can be used for the shells of temporary or permanent buildings.
            </p>
          </div>

          <div className="kerbs-card">
            <img src={noiseBarrierImg} alt="Noise Barriers" />
            <h3>Noise Barriers</h3>
            <p>
              Used in large-scale infrastructure projects to reduce sound pollution.
            </p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default Kerbs;
