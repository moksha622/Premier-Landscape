// src/pages/PaverLayingMachines.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./paver-laying-machines.css";

/* --- HERO IMAGE --- */
import layingMainImg from "../assets/technologies/paver-laying/laying-main.jpg";

/* --- PAVER LAYING MACHINE IMAGES (5) --- */
import optimasImg from "../assets/technologies/paver-laying/optimas.jpeg";
import unilyftImg from "../assets/technologies/paver-laying/unilyft.jpeg";
import probstImg from "../assets/technologies/paver-laying/probst.jpeg";
import vacuMobileImg from "../assets/technologies/paver-laying/vacu-mobile.jpg";
import paveToolImg from "../assets/technologies/paver-laying/pave-tool.jpg";

const PaverLayingMachines = () => {
  return (
    <>
      <Header />

      <main className="paver-wrapper">

        {/* HERO IMAGE */}
        <div className="paver-main-image">
          <img src={layingMainImg} alt="Paver Laying Machines" />
          <div className="paver-overlay-title">Paver Laying Machines</div>
        </div>

        {/* INTRO */}
        <section className="paver-description">
          <p>
            Paver laying machines significantly increase the speed, precision, and efficiency of hardscaping projects compared to manual installation. 
            The type of machine best suited for a landscaping project depends on its size, complexity, and budget.
          </p>
        </section>

        {/* PAVER MACHINES GRID */}
        <section className="paver-grid-five">
          <div className="paver-card">
            <img src={optimasImg} alt="Optimas S24 PaveJet" />
            <h3>Optimas S24 PaveJet</h3>
            <p>
              This is a commercial-grade ride-on paver known for placing prearranged layers of pavers quickly and precisely.
            </p>
          </div>

          <div className="paver-card">
            <img src={unilyftImg} alt="Unilyft Paver Assist Machine" />
            <h3>Unilyft Paver Laying Assist</h3>
            <p>
              This track-chassis paver assist machine is designed to lift and place heavy bundles of pavers with a maximum lift capacity of 310 pounds.
            </p>
          </div>

          <div className="paver-card">
            <img src={probstImg} alt="Probst Hydraulic Laying Clamp" />
            <h3>Probst Hydraulic Laying Clamp (HVZ)</h3>
            <p>
              This attachment can be fitted to an excavator and can be used for all standard paver types and stone sizes.
            </p>
          </div>

          <div className="paver-card">
            <img src={vacuMobileImg} alt="Optimas Vacu-Mobile Allrounder" />
            <h3>Optimas Vacu-Mobile Allrounder</h3>
            <p>
              This device uses vacuum technology to lift and transport pavers.
            </p>
          </div>

          <div className="paver-card">
            <img src={paveToolImg} alt="Pave Tool Innovators VME3" />
            <h3>Pave Tool Innovators VME3</h3>
            <p>
              This is a vacuum lifting kit designed for lifting and placing paving stones.
            </p>
          </div>
        </section>

      </main>

      
    </>
  );
};

export default PaverLayingMachines;
