import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./MulchAndCompost.css";

// HERO IMAGE
import mulchMainImage from "../assets/products/mulch/mulch-main.jpg";

// COMPOST IMAGES (4)
import homemadeCompostImg from "../assets/products/mulch/homemade-compost.jpeg";
import packagedCompostImg from "../assets/products/mulch/packaged-compost.jpeg";
import diestelCompostImg from "../assets/products/mulch/diestel-composte.jpeg";
import oakdellCompostImg from "../assets/products/mulch/oakdel-composte.jpeg";

// ORGANIC MULCH IMAGES (4)
import woodchipsImg from "../assets/products/mulch/woodchips.jpg";
import pineNeedlesImg from "../assets/products/mulch/pine-needles.jpeg";
import shreddedLeavesImg from "../assets/products/mulch/shredded-leaves.jpeg";
import strawImg from "../assets/products/mulch/straw.jpg";

// INORGANIC MULCH IMAGES (2)
import gravelImg from "../assets/products/mulch/gravel.jpeg";
import landscapeFabricImg from "../assets/products/mulch/landscape-fabric.jpeg";

const MulchAndCompost = () => {
  return (
    <>
      <Header />

      <main className="mc-wrapper">

        {/* HERO IMAGE */}
        <div className="mc-main-image">
          <img src={mulchMainImage} alt="Mulch and Compost" />
          <div className="mc-overlay-title">Mulch & Compost</div>
        </div>

        {/* DESCRIPTION */}
        <section className="mc-description">
          <p>
            For a healthy and low-maintenance landscape, it is essential to understand the 
            distinct purposes of mulch and compost. Compost is a soil amendment that enriches 
            the soil from within, while mulch is a protective layer that sits on top of the soil. 
            When used together, they create a nutrient-rich and protected environment for your plants.
          </p>
        </section>

        {/* COMPOST SECTION */}
        <section className="mc-description">
          <h2 className="mc-section-title">Compost</h2>
          <p>
            Compost is decomposed organic material that provides nutrients, improves soil 
            structure, and enhances moisture retention. It creates an ideal environment 
            for soil microbes and earthworms, which further improve soil health.
          </p>
        </section>

        {/* COMPOST GRID (4 IMAGES) */}
        <section className="mc-grid">
          <div className="mc-card">
            <img src={homemadeCompostImg} alt="Homemade Compost" />
            <p className="mc-text">Homemade compost: Use a compost bin or tumbler to turn kitchen scraps, leaves, and yard waste into nutrient-rich material.</p>
          </div>

          <div className="mc-card">
            <img src={packagedCompostImg} alt="Packaged Compost" />
            <p className="mc-text">Packaged compost: Convenient, ready-to-use compost for improving soil quality.</p>
          </div>

          <div className="mc-card">
            <img src={diestelCompostImg} alt="Diestel Organic Compost" />
            <p className="mc-text">Organic Diestel Structured Compost: Made from aged cattle manure and forest trimmings.</p>
          </div>

          <div className="mc-card">
            <img src={oakdellCompostImg} alt="Oakdell Compost" />
            <p className="mc-text">Oakdell Compost: Produced using poultry manure and wood shavings.</p>
          </div>
        </section>

        {/* MULCH SECTION */}
        <section className="mc-description">
          <h2 className="mc-section-title">Mulch</h2>
          <p>
            Mulch is a protective covering spread over the soil surface to conserve moisture, 
            suppress weeds, and regulate soil temperature. It can be organic or inorganic.
          </p>
        </section>

        {/* ORGANIC MULCH GRID (4) */}
        <section className="mc-grid">
          <div className="mc-card">
            <img src={woodchipsImg} alt="Wood Chips" />
            <p className="mc-text">Wood chips or shredded bark: A long-lasting, decorative option for beds and around shrubs.</p>
          </div>

          <div className="mc-card">
            <img src={pineNeedlesImg} alt="Pine Needles" />
            <p className="mc-text">Pine needles: Perfect for acid-loving plants like rhododendrons and azaleas.</p>
          </div>

          <div className="mc-card">
            <img src={shreddedLeavesImg} alt="Shredded Leaves" />
            <p className="mc-text">Shredded leaves: Free and very effective—shred to avoid matting.</p>
          </div>

          <div className="mc-card">
            <img src={strawImg} alt="Straw Mulch" />
            <p className="mc-text">Straw: Lightweight, ideal for vegetable gardens and disease prevention.</p>
          </div>
        </section>

        {/* INORGANIC MULCH GRID (2) */}
        <section className="mc-grid-two">
          <div className="mc-card">
            <img src={gravelImg} alt="Gravel" />
            <p className="mc-text">Gravel: Permanent and decorative; great for rock gardens, drought plants.</p>
          </div>

          <div className="mc-card">
            <img src={landscapeFabricImg} alt="Landscape Fabric" />
            <p className="mc-text">Landscape fabric: Helps control weeds but may limit soil health.</p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default MulchAndCompost;
