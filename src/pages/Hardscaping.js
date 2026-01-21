import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Hardscaping.css";

// HERO IMAGE
import hardscapingMainImage from "../assets/services/hardscaping/hardscaping-main.jpg";

// FUNCTIONAL STRUCTURES (6)
import patiosImg from "../assets/services/hardscaping/patios.jpeg";
import walkwaysImg from "../assets/services/hardscaping/walkways.jpeg";
import drivewaysImg from "../assets/services/hardscaping/driveways.jpeg";
import retainingWallsImg from "../assets/services/hardscaping/retaining-walls.jpg";
import fencesImg from "../assets/services/hardscaping/fences.jpg";
import stairsImg from "../assets/services/hardscaping/stairs.jpeg";

// ENTERTAINMENT & AESTHETIC (6)
import outdoorKitchenImg from "../assets/services/hardscaping/outdoor-kitchen.jpeg";
import firepitImg from "../assets/services/hardscaping/firepit.jpg";
import waterFeaturesImg from "../assets/services/hardscaping/water-features.jpeg";
import pergolaImg from "../assets/services/hardscaping/pergola.jpg";
import decorativeImg from "../assets/services/hardscaping/decorative.jpg";
import lightingImg from "../assets/services/hardscaping/lighting.jpeg";

// SUSTAINABLE & UTILITY (4)
import gravelMulchImg from "../assets/services/hardscaping/gravel-mulch.jpg";
import raisedBedsImg from "../assets/services/hardscaping/raised-beds.jpg";
import artificialGrassImg from "../assets/services/hardscaping/artificial-grass.jpeg";
import drainageImg from "../assets/services/hardscaping/drainage.jpeg";

const Hardscaping = () => {
  return (
    <>
      <Header />

      <main className="hs-wrapper">

        {/* HERO IMAGE */}
        <div className="hs-main-image">
          <img src={hardscapingMainImage} alt="Hardscaping" />
          <div className="hs-overlay-title">Hardscaping</div>
        </div>

        {/* INTRO */}
        <section className="hs-description">
          <p>
            Hardscaping services involve the design and installation of non-living,
            permanent elements in a landscape using materials like stone, concrete, 
            brick, and wood. These features provide structure, functionality, and 
            aesthetic appeal to outdoor spaces.
          </p>
        </section>

        {/* FUNCTIONAL STRUCTURES */}
        <section className="hs-description">
          <h2 className="hs-section-title">Functional Structures</h2>
        </section>

        <section className="hs-grid-six">
          <div className="hs-card">
            <img src={patiosImg} alt="Patios" />
            <p className="hs-text">
              Patios and Decks: Outdoor living areas for dining, relaxing, or entertaining.
            </p>
          </div>

          <div className="hs-card">
            <img src={walkwaysImg} alt="Walkways and Pathways" />
            <p className="hs-text">
              Walkways and Pathways: Designed using pavers, stone, or gravel to connect spaces.
            </p>
          </div>

          <div className="hs-card">
            <img src={drivewaysImg} alt="Driveways" />
            <p className="hs-text">
              Driveways and Parking Areas: Durable surfaces made of pavers or concrete.
            </p>
          </div>

          <div className="hs-card">
            <img src={retainingWallsImg} alt="Retaining Walls" />
            <p className="hs-text">
              Retaining & Sitting Walls: Prevent erosion and create structured levels.
            </p>
          </div>

          <div className="hs-card">
            <img src={fencesImg} alt="Fences" />
            <p className="hs-text">
              Fences and Gates: Provide privacy, security, and visual appeal.
            </p>
          </div>

          <div className="hs-card">
            <img src={stairsImg} alt="Steps" />
            <p className="hs-text">
              Stairs and Steps: Safe transitions using stone, concrete, or wood.
            </p>
          </div>
        </section>

        {/* ENTERTAINMENT & AESTHETIC */}
        <section className="hs-description">
          <h2 className="hs-section-title">Entertainment & Aesthetic Features</h2>
        </section>

        <section className="hs-grid-six">
          <div className="hs-card">
            <img src={outdoorKitchenImg} alt="Outdoor Kitchen" />
            <p className="hs-text">
              Outdoor Kitchens: Built-in grill areas, countertops, and cooking zones.
            </p>
          </div>

          <div className="hs-card">
            <img src={firepitImg} alt="Fire Pits" />
            <p className="hs-text">
              Fire Pits & Fireplaces: Cozy gathering spots for evenings.
            </p>
          </div>

          <div className="hs-card">
            <img src={waterFeaturesImg} alt="Water Features" />
            <p className="hs-text">
              Water Features: Ponds, streams, fountains, and waterfalls.
            </p>
          </div>

          <div className="hs-card">
            <img src={pergolaImg} alt="Pergolas" />
            <p className="hs-text">
              Pergolas, Arbors & Gazebos: Add vertical elements and shaded areas.
            </p>
          </div>

          <div className="hs-card">
            <img src={decorativeImg} alt="Decorative Elements" />
            <p className="hs-text">
              Decorative Elements: Pebbles, statues, edging, and accents.
            </p>
          </div>

          <div className="hs-card">
            <img src={lightingImg} alt="Outdoor Lighting" />
            <p className="hs-text">
              Outdoor Lighting: Improves ambiance and safety after dark.
            </p>
          </div>
        </section>

        {/* SUSTAINABLE & UTILITY */}
        <section className="hs-description">
          <h2 className="hs-section-title">Sustainable and Utility Features</h2>
        </section>

        <section className="hs-grid-four">
          <div className="hs-card">
            <img src={gravelMulchImg} alt="Gravel" />
            <p className="hs-text">
              Gravel & Mulch Areas: Low-maintenance ground cover solutions.
            </p>
          </div>

          <div className="hs-card">
            <img src={raisedBedsImg} alt="Raised Beds" />
            <p className="hs-text">
              Raised Garden Beds: Structured beds for gardening.
            </p>
          </div>

          <div className="hs-card">
            <img src={artificialGrassImg} alt="Artificial Grass" />
            <p className="hs-text">
              Artificial Grass: Water-saving and low-maintenance alternative.
            </p>
          </div>

          <div className="hs-card">
            <img src={drainageImg} alt="Drainage Systems" />
            <p className="hs-text">
              Drainage Systems: Dry creek beds & permeable surfaces.
            </p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default Hardscaping;
