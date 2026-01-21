import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PlantsAndTreesAndSod.css";

// MAIN BANNER IMAGE
import sodMainImage from "../assets/products/sod/sod-main.jpg";

// PLANTS IMAGES
import hydrangeaImg from "../assets/products/plants/hydrangea.jpeg";
import forestGrassImg from "../assets/products/plants/forest-grass.jpeg";
import hostasImg from "../assets/products/plants/hostas.jpg";
import dianthusImg from "../assets/products/plants/dianthus.jpg";

// TREES IMAGES
import mapleImg from "../assets/products/trees/maple.jpeg";
import arborvitaeImg from "../assets/products/trees/arborvitae.jpg";
import birchImg from "../assets/products/trees/brich.jpeg";
import dogwoodImg from "../assets/products/trees/dogwood.jpeg";

// SOD IMAGES
import kentuckyImg from "../assets/products/sod/kentucky.jpeg";
import bermudaImg from "../assets/products/sod/bermuda.jpg";
import fescueImg from "../assets/products/sod/fescue.jpg";

const PlantsAndTreesAndSod = () => {
  const plants = [
    {
      name: "Hydrangea",
      img: hydrangeaImg,
      desc:
        "Versatile shrubs known for large, showy blooms, used as hedging plants or focal points."
    },
    {
      name: "Japanese Forest Grass",
      img: forestGrassImg,
      desc:
        "An ornamental grass used as a low-maintenance groundcover or to add height to borders."
    },
    {
      name: "Hostas",
      img: hostasImg,
      desc:
        "Popular perennials used in shady areas for their diverse foliage and texture."
    },
    {
      name: "Annuals (Dianthus)",
      img: dianthusImg,
      desc:
        "Used to provide seasonal bursts of color in flowerbeds and containers."
    }
  ];

  const trees = [
    {
      name: "Maple",
      img: mapleImg,
      desc:
        "Known for vibrant fall color and structured form; perfect for residential landscapes."
    },
    {
      name: "Arborvitae (White Cedar)",
      img: arborvitaeImg,
      desc:
        "Evergreen tree commonly used for year-round privacy screens and wind protection."
    },
    {
      name: "Birch",
      img: birchImg,
      desc:
        "Light-canopy deciduous tree often planted in clusters to provide shade with winter light."
    },
    {
      name: "Dogwood",
      img: dogwoodImg,
      desc:
        "Ornamental tree with seasonal flowers and strong visual appeal as a specimen plant."
    }
  ];

  const sodTypes = [
    {
      name: "Kentucky Bluegrass",
      img: kentuckyImg,
      desc:
        "A dense, lush cool-season turfgrass commonly used in residential lawns."
    },
    {
      name: "Bermuda Grass",
      img: bermudaImg,
      desc:
        "Durable warm-season grass that handles heavy foot traffic—ideal for active areas."
    },
    {
      name: "Tall Fescue",
      img: fescueImg,
      desc:
        "A resilient turf variety adaptable to many climates and often used in lawn blends."
    }
  ];

  return (
    <>
      <Header />

      <main className="pts-wrapper">

        {/* Hero Image */}
        <div className="pts-main-image">
          <img src={sodMainImage} alt="Plants Trees Sod" />
          <div className="pts-overlay-title">Plants, Trees & Sod</div>
        </div>

        {/* FIRST DESCRIPTION */}
        <section className="pts-description">
          <p>
            Plants, trees, and sod are essential "softscape" components of landscape design,
            providing aesthetic appeal, structure, and crucial environmental benefits. They are used 
            to create beautiful, functional, and sustainable outdoor spaces.
          </p>
          <p>
            <strong>Plants:</strong> This diverse category includes smaller living elements that add 
            color, texture, and seasonal interest. They shape the middle layers of a landscape and 
            enhance the sensory experience through varied textures and blooms.
          </p>
        </section>

        {/* PLANTS GRID */}
        <h2 className="pts-section-title">Popular Landscape Plants</h2>

        <section className="pts-grid">
          {plants.map((item, i) => (
            <div className="pts-card" key={i}>
              <img src={item.img} alt={item.name} className="pts-card-image" />
              <h4 className="pts-card-name">{item.name}</h4>
              <p className="pts-card-desc">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* TREES DESCRIPTION */}
        <section className="pts-description">
          <p>
            <strong>Trees:</strong> Trees serve as long-term structural anchors in landscape design, 
            providing shade, privacy, and visual framing. They also help integrate built structures 
            into the natural environment.
          </p>
        </section>

        {/* TREES GRID */}
        <h2 className="pts-section-title">Common Landscape Trees</h2>

        <section className="pts-grid">
          {trees.map((item, i) => (
            <div className="pts-card" key={i}>
              <img src={item.img} alt={item.name} className="pts-card-image" />
              <h4 className="pts-card-name">{item.name}</h4>
              <p className="pts-card-desc">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* SOD DESCRIPTION */}
        <section className="pts-description">
          <p>
            <strong>Sod:</strong> Pre-grown turfgrass installed in rolls, providing an instant, 
            uniform lawn surface. Sod helps control erosion, reduces heat, and defines open 
            landscape areas.
          </p>
        </section>

        {/* SOD GRID */}
        <h2 className="pts-section-title">Types of Sod</h2>

        <section className="pts-grid">
          {sodTypes.map((item, i) => (
            <div className="pts-card" key={i}>
              <img src={item.img} alt={item.name} className="pts-card-image" />
              <h4 className="pts-card-name">{item.name}</h4>
              <p className="pts-card-desc">{item.desc}</p>
            </div>
          ))}
        </section>

      </main>

      
    </>
  );
};

export default PlantsAndTreesAndSod;
