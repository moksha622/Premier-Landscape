// src/pages/Plant.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./plant.css";

/* --- HERO IMAGE --- */
import biotechMainImg from "../assets/technologies/plant/biotech-main.jpg";

/* --- PLANT BIOTECH IMAGES (6) --- */
import micropropagationImg from "../assets/technologies/plant/micropropagation.jpg";
import geneticEngineeringImg from "../assets/technologies/plant/genetic-engineering.png";
import molecularMarkersImg from "../assets/technologies/plant/molecular-markers.jpg";
import geneEditingImg from "../assets/technologies/plant/gene-editing.jpeg";
import somaclonalVariationImg from "../assets/technologies/plant/somaclonal-variation.jpeg";
import somaticHybridizationImg from "../assets/technologies/plant/somatic-hybridization.png";

const Plant = () => {
  return (
    <>
      <Header />

      <main className="plant-wrapper">

        {/* HERO IMAGE */}
        <div className="plant-main-image">
          <img src={biotechMainImg} alt="Plant Biotechnology" />
          <div className="plant-overlay-title">
            Plant Biotechnology
          </div>
        </div>

        {/* INTRO */}
        <section className="plant-description">
          <p>
            Plant biotechnology is used in landscaping to develop hardier, more aesthetically appealing, and environmentally adaptable plants through methods such as tissue culture, genetic engineering, molecular markers, and gene editing. These technologies accelerate the breeding process and enable traits not possible through traditional methods.
          </p>
        </section>

        {/* PLANT BIOTECH GRID */}
        <section className="plant-grid-six">
          <div className="plant-card">
            <img src={micropropagationImg} alt="Micropropagation" />
            <h3>Micropropagation (Tissue Culture)</h3>
            <p>
              Cultivating small plant parts (explants) in a sterile, nutrient-rich medium to produce many genetically identical, disease-free plants quickly for commercial landscaping projects.
            </p>
          </div>

          <div className="plant-card">
            <img src={geneticEngineeringImg} alt="Genetic Engineering" />
            <h3>Genetic Engineering (Genetic Transformation)</h3>
            <p>
              Introducing specific genes into a plant's genome to develop plants with novel traits like unique flower colors, pest resistance, or environmental stress tolerance.
            </p>
          </div>

          <div className="plant-card">
            <img src={molecularMarkersImg} alt="Molecular Markers and MAS" />
            <h3>Molecular Markers & Marker-Assisted Selection (MAS)</h3>
            <p>
              DNA-based tools to identify desirable genes, speeding up breeding programs by screening plants for target traits at the seedling stage.
            </p>
          </div>

          <div className="plant-card">
            <img src={geneEditingImg} alt="Gene Editing (CRISPR/Cas9)" />
            <h3>Gene Editing (CRISPR/Cas9)</h3>
            <p>
              Precise modifications of plant genes to develop new varieties with improved traits such as enhanced disease resistance or altered physical characteristics.
            </p>
          </div>

          <div className="plant-card">
            <img src={somaclonalVariationImg} alt="Somaclonal Variation" />
            <h3>Somaclonal Variation</h3>
            <p>
              Generating genetic variations from tissue culture, allowing selection of unique ornamental varieties with new flower forms, colors, or growth habits.
            </p>
          </div>

          <div className="plant-card">
            <img src={somaticHybridizationImg} alt="Somatic Hybridization" />
            <h3>Somatic Hybridization (Protoplast Fusion)</h3>
            <p>
              Fusing protoplasts from different species to create hybrids combining desirable traits, e.g., transferring disease resistance to commercial ornamental plants.
            </p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default Plant;
