// src/pages/GardenEdgingAndWallBlocks.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./garden-edging-and-wall-blocks.css";

/* --- HERO IMAGE --- */
import wallMainImg from "../assets/products/edging/wall-main.jpg";

/* --- GARDEN EDGING IMAGES (5) --- */
import concreteImg from "../assets/products/edging/concrete.png";
import stoneBrickImg from "../assets/products/edging/stone-brick.jpeg";
import metalImg from "../assets/products/edging/metal.jpg";
import plasticImg from "../assets/products/edging/plastic.jpeg";
import woodImg from "../assets/products/edging/wood.jpeg";

/* --- WALL BLOCKS IMAGES (4) --- */
import interlockingImg from "../assets/products/edging/interlocking.jpeg";
import naturalStoneImg from "../assets/products/edging/natural-stone.jpg";
import cinderImg from "../assets/products/edging/cinder.jpeg";
import gabionImg from "../assets/products/edging/gabion.jpeg";

const GardenEdgingAndWallBlocks = () => {
  return (
    <>
      <Header />

      <main className="ge-wrapper">

        {/* HERO IMAGE */}
        <div className="ge-main-image">
          <img src={wallMainImg} alt="Garden Edging and Wall Blocks" />
          <div className="ge-overlay-title">Garden Edging & Wall Blocks</div>
        </div>

        {/* INTRO */}
        <section className="ge-description">
          <p>
            For landscaping, garden edging creates clean borders to define different areas, while
            wall blocks are used for constructing retaining walls or raised garden beds. Your choice
            of material and design should complement your garden's overall aesthetic, from modern
            and sleek to rustic and natural.
          </p>
        </section>

        {/* GARDEN EDGING SECTION TITLE */}
        <section className="ge-description">
          <h2 className="ge-section-title">Garden Edging</h2>
          <p>
            Garden edging helps separate lawns, garden beds, and pathways, prevents grass from
            spreading, and contains loose materials like mulch or gravel.
          </p>
        </section>

        {/* 5 ITEM GRID */}
        <section className="ge-grid-five">

          <div className="ge-card">
            <img src={concreteImg} alt="Concrete Edging" />
            <h3>Concrete</h3>
            <p>
              Offers a versatile, durable, and permanent solution. Can be poured or installed with
              pre-formed blocks.
            </p>
          </div>

          <div className="ge-card">
            <img src={stoneBrickImg} alt="Stone and Brick" />
            <h3>Stone & Brick</h3>
            <p>
              Classic and elegant look. Bricks can be placed vertically or angled for creative edging.
            </p>
          </div>

          <div className="ge-card">
            <img src={metalImg} alt="Metal Edging" />
            <h3>Metal</h3>
            <p>
              Sleek, modern aesthetic. Extremely durable and good for straight-line designs.
            </p>
          </div>

          <div className="ge-card">
            <img src={plasticImg} alt="Plastic Edging" />
            <h3>Plastic or Rubber</h3>
            <p>
              Affordable and easy to install. Flexible for curved borders but less durable.
            </p>
          </div>

          <div className="ge-card">
            <img src={woodImg} alt="Wood Edging" />
            <h3>Wood</h3>
            <p>
              Natural and rustic look. Good for straight designs but eventually rots over time.
            </p>
          </div>

        </section>

        {/* WALL BLOCKS SECTION */}
        <section className="ge-description">
          <h2 className="ge-section-title">Wall Blocks</h2>
          <p>
            Wall blocks are used for raised garden beds or small retaining walls to control soil
            erosion on slopes.
          </p>
        </section>

        {/* 4 ITEM GRID */}
        <section className="ge-grid-four">

          <div className="ge-card">
            <img src={interlockingImg} alt="Interlocking Blocks" />
            <h3>Interlocking Blocks</h3>
            <p>
              Modular, durable, and DIY-friendly. Tabs lock blocks together securely.
            </p>
          </div>

          <div className="ge-card">
            <img src={naturalStoneImg} alt="Natural Stone" />
            <h3>Natural Stone</h3>
            <p>
              Very durable with unique textures and colors. More expensive and complex to install.
            </p>
          </div>

          <div className="ge-card">
            <img src={cinderImg} alt="Cinder Blocks" />
            <h3>Cinder Blocks</h3>
            <p>
              Affordable, simple to install, and can be painted or rendered.
            </p>
          </div>

          <div className="ge-card">
            <img src={gabionImg} alt="Gabion Walls" />
            <h3>Gabion Walls</h3>
            <p>
              Wire cages filled with stones. Extremely strong and great for tall retaining walls.
            </p>
          </div>

        </section>

      </main>

      
    </>
  );
};

export default GardenEdgingAndWallBlocks;
