import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SoilAndSand.css";

// HERO IMAGE
import soilMainImage from "../assets/products/soil/soil-main.jpeg";

// SOIL IMAGES (4)
import loamSoilImg from "../assets/products/soil/loam-soil.jpeg";
import topsoilImg from "../assets/products/soil/top-soil.jpeg";
import sandySoilImg from "../assets/products/soil/sandy-soil.jpeg";
import claySoilImg from "../assets/products/soil/clay-soil.jpeg";

// SAND IMAGES (6)
import horticultureSandImg from "../assets/products/soil/horticulture-sand.jpeg";
import concreteSandImg from "../assets/products/soil/concrete-sand.jpeg";
import masonrySandImg from "../assets/products/soil/masonry-sand.jpeg";
import riverSandImg from "../assets/products/soil/river-sand.jpeg";
import utilitySandImg from "../assets/products/soil/utility-sand.jpeg";
import whiteSandImg from "../assets/products/soil/white-sand.jpeg";

const SoilAndSand = () => {
  return (
    <>
      <Header />

      <main className="ss-wrapper">

        {/* HERO IMAGE */}
        <div className="ss-main-image">
          <img src={soilMainImage} alt="Soil and Sand" />
          <div className="ss-overlay-title">Soil & Sand</div>
        </div>

        {/* SOIL SECTION TITLE */}
        <section className="ss-description">
          <h2 className="ss-section-title"> Soil</h2>
          <p>
            Healthy soil is the foundation of any successful landscape, supporting plant life,
            improving drainage, and fostering a thriving ecosystem. Different landscaping needs,
            such as vegetable gardens, flower beds, or lawns, require specific soil types and
            amendments to thrive. The ideal soil, known as loam, is a balanced mix of sand, silt,
            and clay, offering good drainage, moisture retention, and rich nutrients.
          </p>
        </section>

        {/* SOIL GRID */}
        <section className="ss-grid">
          <div className="ss-card">
            <img src={loamSoilImg} alt="Loam Soil" />
            <p className="ss-text">
              Loam soil: Considered the best soil for gardening—balanced mix, retains moisture,
              drains well, and rich in nutrients.
            </p>
          </div>

          <div className="ss-card">
            <img src={topsoilImg} alt="Topsoil" />
            <p className="ss-text">
              Topsoil: The uppermost nutrient-rich layer; used for lawns, gardens, and leveling.
            </p>
          </div>

          <div className="ss-card">
            <img src={sandySoilImg} alt="Sandy Soil" />
            <p className="ss-text">
              Sandy soil: Drains quickly, warms fast, low nutrient retention—ideal for cacti and succulents.
            </p>
          </div>

          <div className="ss-card">
            <img src={claySoilImg} alt="Clay Soil" />
            <p className="ss-text">
              Clay soil: High in nutrients but drains slowly; can compact and requires aeration.
            </p>
          </div>
        </section>

        {/* SAND SECTION TITLE */}
        <section className="ss-description">
          <h2 className="ss-section-title"> Sand</h2>
          <p>
            In landscaping, sand is used primarily for creating stable, well-draining bases, while
            soil provides nutrients and organic matter for plants. Loam is considered the ideal soil
            for most gardening purposes.
          </p>
        </section>

        {/* SAND GRID (6 ITEMS) */}
        <section className="ss-grid-six">

          <div className="ss-card">
            <img src={horticultureSandImg} alt="Horticultural Sand" />
            <p className="ss-text">
              Horticultural Sand: Enhances drainage & aeration; perfect for succulent and cactus soil mixes.
            </p>
          </div>

          <div className="ss-card">
            <img src={concreteSandImg} alt="Concrete Sand" />
            <p className="ss-text">
              Concrete Sand: Used as a strong base layer for pavers, patios, and concrete mixes.
            </p>
          </div>

          <div className="ss-card">
            <img src={masonrySandImg} alt="Masonry Sand" />
            <p className="ss-text">
              Masonry Sand: Fine texture—ideal for playgrounds, sandboxes, and leveling pavers.
            </p>
          </div>

          <div className="ss-card">
            <img src={riverSandImg} alt="River Sand" />
            <p className="ss-text">
              River Sand: Natural-looking, improves drainage, used for ponds & stream beds.
            </p>
          </div>

          <div className="ss-card">
            <img src={utilitySandImg} alt="Utility Sand" />
            <p className="ss-text">
              Utility Sand: Heavy and compacting—used for pavement and construction foundations.
            </p>
          </div>

          <div className="ss-card">
            <img src={whiteSandImg} alt="White Sand" />
            <p className="ss-text">
              White Sand: Bright, clean look—used around pools, Zen gardens, and decorative landscapes.
            </p>
          </div>

        </section>

      </main>

      
    </>
  );
};

export default SoilAndSand;
