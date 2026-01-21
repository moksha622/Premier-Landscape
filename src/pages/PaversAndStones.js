import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PraversAndStones.css";

import mainImage from "../assets/products/pavers-stones.jpg";

// 9 paver images
import concreteImg from "../assets/products/pavers/concrete.jpeg";
import brickImg from "../assets/products/pavers/brick.jpg";
import naturalStoneImg from "../assets/products/pavers/natural-stone.jpeg";
import porcelainImg from "../assets/products/pavers/porcelain.jpeg";
import rubberImg from "../assets/products/pavers/rubber.jpeg";
import walkwayImg from "../assets/products/pavers/walkway.jpeg";
import poolDeckImg from "../assets/products/pavers/pool-deck.png";
import retainingWallImg from "../assets/products/pavers/retaining-wall.png";
import interlockingImg from "../assets/products/pavers/interlocking.jpg";

// 7 stone images
import gravelImg from "../assets/products/stones/gravel.jpg";
import flagstoneImg from "../assets/products/stones/flagstone.png";
import bouldersImg from "../assets/products/stones/boulders.jpg";
import riverRockImg from "../assets/products/stones/river-rock.jpg";
import decomposedGraniteImg from "../assets/products/stones/decomposed-granite.jpg";
import slateImg from "../assets/products/stones/slate.jpeg";
import mexicanPebblesImg from "../assets/products/stones/mexican-pebbles.jpg";

const PraversAndStones = () => {
  const pavers = [
    {
      name: "Concrete Pavers",
      img: concreteImg,
      desc: "Made from a cement and aggregate mixture, they are durable and come in many shapes, colors, and finishes."
    },
    {
      name: "Brick Pavers",
      img: brickImg,
      desc: "A classic choice made from fired clay, offering a timeless and warm appearance."
    },
    {
      name: "Natural Stone Pavers",
      img: naturalStoneImg,
      desc: "Includes granite, bluestone, limestone, and sandstone—each known for unique beauty and durability."
    },
    {
      name: "Porcelain Tile Pavers",
      img: porcelainImg,
      desc: "A man-made material that is extremely durable and resistant to weather, stains, and scratches."
    },
    {
      name: "Rubber Pavers",
      img: rubberImg,
      desc: "An eco-friendly and impact-absorbing option that feels softer underfoot."
    },
    {
      name: "Walkway & Stepping Stone Pavers",
      img: walkwayImg,
      desc: "Used for pathways and garden walkways to create functional, beautiful routes."
    },
    {
      name: "Pool Deck Pavers",
      img: poolDeckImg,
      desc: "Slip-resistant and designed to stay cool under sunlight—ideal for pool surroundings."
    },
    {
      name: "Retaining Wall Pavers",
      img: retainingWallImg,
      desc: "Used to build sturdy, long-lasting retaining walls and landscape structures."
    },
    {
      name: "Interlocking Pavers",
      img: interlockingImg,
      desc: "Lock together like a puzzle to form a strong, stable, and durable surface foundation."
    }
  ];

  const stones = [
    {
      name: "Gravel & Crushed Stone",
      img: gravelImg,
      desc: "Highly versatile and ideal for driveways, pathways, and ground cover."
    },
    {
      name: "Flagstone",
      img: flagstoneImg,
      desc: "Flat, durable stones perfect for patios, stepping paths, and stylish walkways."
    },
    {
      name: "Boulders",
      img: bouldersImg,
      desc: "Large natural stones used to create dramatic landscape accents and retaining features."
    },
    {
      name: "River Rock",
      img: riverRockImg,
      desc: "Smooth, rounded stones that add a natural, warm appearance to garden areas."
    },
    {
      name: "Decomposed Granite",
      img: decomposedGraniteImg,
      desc: "Fine-grained material used in pathways and patio surfaces for a rustic look."
    },
    {
      name: "Slate",
      img: slateImg,
      desc: "A refined stone ideal for modern, formal designs—often cut into uniform shapes."
    },
    {
      name: "Mexican Beach Pebbles",
      img: mexicanPebblesImg,
      desc: "Smooth decorative pebbles perfect as accents along pathways and garden beds."
    }
  ];

  return (
    <>
      <Header />

      <main className="pas-wrapper">
        
        {/* Main Banner Image */}
        <div className="pas-main-image">
          <img src={mainImage} alt="Pavers and Stones" />
          <div className="pas-overlay-title">Pavers & Stones</div>
        </div>

        {/* Intro Description */}
        <section className="pas-description">
          <p>
            Using pavers in landscaping creates durable, attractive surfaces for patios, walkways,
            and driveways, while also providing garden edging and unique features like steps and
            zen gardens. A successful installation requires proper planning, including excavation,
            creating a stable base of gravel and sand, and securing edges with restraints.
          </p>
        </section>

        {/* Pavers Section */}
        <h2 className="pas-section-title">Types of Pavers</h2>

        <section className="pas-grid">
          {pavers.map((item, i) => (
            <div className="pas-card" key={i}>
              <img src={item.img} alt={item.name} className="pas-card-image" />
              <h4 className="pas-card-name">{item.name}</h4>
              <p className="pas-card-desc">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Stones Description */}
        <section className="pas-description">
          <p>
            Using stones in landscaping creates beautiful, low-maintenance, and durable features
            for walkways, patios, rock gardens, retaining walls, and water features. Stones offer
            structure, improve drainage, reduce weeds, and add texture through decorative gravel,
            boulders, or flagstone.
          </p>
        </section>

        {/* Stones Section */}
        <h2 className="pas-section-title">Types of Landscaping Stones</h2>

        <section className="pas-grid">
          {stones.map((item, i) => (
            <div className="pas-card" key={i}>
              <img src={item.img} alt={item.name} className="pas-card-image" />
              <h4 className="pas-card-name">{item.name}</h4>
              <p className="pas-card-desc">{item.desc}</p>
            </div>
          ))}
        </section>

        
      </main>
    </>
  );
};

export default PraversAndStones;
