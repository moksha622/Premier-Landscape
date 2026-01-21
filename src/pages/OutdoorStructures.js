// src/pages/OutdoorStructures.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./outdoor-structures.css";

/* --- HERO IMAGE --- */
import outdoorMainImg from "../assets/products/outdoor/outdoor-main.jpg";

/* --- OUTDOOR STRUCTURES IMAGES (8) --- */
import pergolaImg from "../assets/products/outdoor/pergola.jpeg";
import gazeboImg from "../assets/products/outdoor/gazebo.jpeg";
import arborImg from "../assets/products/outdoor/arbor.jpeg";
import trellisImg from "../assets/products/outdoor/trellis.jpeg";
import patioDeckImg from "../assets/products/outdoor/patio-deck.jpeg";
import statueImg from "../assets/products/outdoor/statue.jpg";
import waterImg from "../assets/products/outdoor/water-feature.png";
import fenceWallImg from "../assets/products/outdoor/fence-wall.jpg";

const OutdoorStructures = () => {
  return (
    <>
      <Header />

      <main className="os-wrapper">

        {/* HERO IMAGE */}
        <div className="os-main-image">
          <img src={outdoorMainImg} alt="Outdoor Structures" />
          <div className="os-overlay-title">Outdoor Structures</div>
        </div>

        {/* INTRO TEXT */}
        <section className="os-description">
          <p>
            Outdoor structures in landscaping are built elements that add functionality, define space,
            create visual interest, and enhance the overall beauty of an outdoor area. They can range
            from simple decorative accents to elaborate living spaces and are often constructed from
            materials like wood, metal, vinyl, or stone.
          </p>
        </section>

        {/* STRUCTURES GRID TITLE */}
        <section className="os-description">
          <h2 className="os-section-title">Types of Outdoor Structures</h2>
        </section>

        {/* 8-ITEM GRID */}
        <section className="os-grid-eight">

          <div className="os-card">
            <img src={pergolaImg} alt="Pergolas" />
            <h3>Pergolas</h3>
            <p>
              Open-air structures with vertical posts and roof latticework. They provide partial
              shade and define outdoor rooms or walkways.
            </p>
          </div>

          <div className="os-card">
            <img src={gazeboImg} alt="Gazebos" />
            <h3>Gazebos</h3>
            <p>
              Freestanding structures with a solid roof. Provide full shade and serve as a charming
              gathering spot or focal point.
            </p>
          </div>

          <div className="os-card">
            <img src={arborImg} alt="Arbors" />
            <h3>Arbors</h3>
            <p>
              Arch-shaped structures used as entrances or transitions between garden areas. Often
              decorated with climbing plants.
            </p>
          </div>

          <div className="os-card">
            <img src={trellisImg} alt="Trellises" />
            <h3>Trellises</h3>
            <p>
              Lattice structures supporting climbing plants. Also function as natural privacy screens.
            </p>
          </div>

          <div className="os-card">
            <img src={patioDeckImg} alt="Patios and Decks" />
            <h3>Patios & Decks</h3>
            <p>
              Outdoor living platforms used for dining, lounging, and entertainment. Built using
              stone, brick, concrete, or wood.
            </p>
          </div>

          <div className="os-card">
            <img src={statueImg} alt="Garden Statues" />
            <h3>Garden Statues</h3>
            <p>
              Decorative sculptures that add personality and serve as visual focal points in gardens.
            </p>
          </div>

          <div className="os-card">
            <img src={waterImg} alt="Water Features" />
            <h3>Water Features</h3>
            <p>
              Includes ponds, waterfalls, and fountains. Adds serene ambiance and attracts wildlife.
            </p>
          </div>

          <div className="os-card">
            <img src={fenceWallImg} alt="Fences and Walls" />
            <h3>Fences & Walls</h3>
            <p>
              Provide privacy, define boundaries, and add strong visual structure to any landscape.
            </p>
          </div>

        </section>

      </main>

      
    </>
  );
};

export default OutdoorStructures;
