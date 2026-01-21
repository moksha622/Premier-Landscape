import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./landscape.css";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// 4 IMAGES FOR LANDSCAPING TEAM / ADHESIVES
import landscape1 from "../assets/contact/landescape/landescape1.png";
import landscape2 from "../assets/contact/landescape/landescape2.png";
import landscape3 from "../assets/contact/landescape/landescape3.png";
import landscape4 from "../assets/contact/landescape/landescape4.png";

const LandscapeContact = () => {
  return (
    <>
      <Header />

      <main className="landscape-wrapper">

        {/* PAGE TITLES */}
        <div className="landscape-title-container">
          <h1 className="landscape-main-title">Contact</h1>
          <h2 className="landscape-sub-title">Landscaping</h2>
          <p className="landscape-desc">Approved adhesives for landscaping.</p>
        </div>

        {/* 4 CARDS */}
        <section className="landscape-grid">

          {/* CARD 1 */}
          <div className="landscape-card">
            <img src={landscape1} alt="Person 1" className="landscape-img" />
            <h3 className="landscape-name">John Smith</h3>
            <p className="landscape-role">Landscape Designer</p>
            <p className="landscape-info">
              <FaPhoneAlt className="landscape-icon" /> +1 416 555 1234
            </p>
            <p className="landscape-info">
              <FaEnvelope className="landscape-icon" /> john@premierlandscape.com
            </p>
          </div>

          {/* CARD 2 */}
          <div className="landscape-card">
            <img src={landscape2} alt="Person 2" className="landscape-img" />
            <h3 className="landscape-name">Mary Johnson</h3>
            <p className="landscape-role">Project Manager</p>
            <p className="landscape-info">
              <FaPhoneAlt className="landscape-icon" /> +1 416 555 5678
            </p>
            <p className="landscape-info">
              <FaEnvelope className="landscape-icon" /> mary@premierlandscape.com
            </p>
          </div>

          {/* CARD 3 */}
          <div className="landscape-card">
            <img src={landscape3} alt="Person 3" className="landscape-img" />
            <h3 className="landscape-name">Robert Brown</h3>
            <p className="landscape-role">Field Supervisor</p>
            <p className="landscape-info">
              <FaPhoneAlt className="landscape-icon" /> +1 416 555 9012
            </p>
            <p className="landscape-info">
              <FaEnvelope className="landscape-icon" /> robert@premierlandscape.com
            </p>
          </div>

          {/* CARD 4 */}
          <div className="landscape-card">
            <img src={landscape4} alt="Person 4" className="landscape-img" />
            <h3 className="landscape-name">Linda White</h3>
            <p className="landscape-role">Materials Specialist</p>
            <p className="landscape-info">
              <FaPhoneAlt className="landscape-icon" /> +1 416 555 3456
            </p>
            <p className="landscape-info">
              <FaEnvelope className="landscape-icon" /> linda@premierlandscape.com
            </p>
          </div>

        </section>
      </main>

      
    </>
  );
};

export default LandscapeContact;
