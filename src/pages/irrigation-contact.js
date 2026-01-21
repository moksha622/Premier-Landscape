import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./irrigation.css";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// 4 IMAGES FOR IRRIGATION TEAM
import irrigation1 from "../assets/contact/irrigation/irrigation1.png";
import irrigation2 from "../assets/contact/irrigation/irrigation2.png";
import irrigation3 from "../assets/contact/irrigation/irrigation3.png";
import irrigation4 from "../assets/contact/irrigation/irrigation4.png";

const IrrigationContact = () => {
  return (
    <>
      <Header />

      <main className="irrigation-wrapper">

        {/* PAGE TITLES */}
        <div className="irrigation-title-container">
          <h1 className="irrigation-main-title">Contact</h1>
          <h2 className="irrigation-sub-title">Irrigation Systems</h2>
          <p className="irrigation-desc">Approved adhesives for irrigation systems.</p>
        </div>

        {/* 4 CARDS */}
        <section className="irrigation-grid">

          {/* CARD 1 */}
          <div className="irrigation-card">
            <img src={irrigation1} alt="Person 1" className="irrigation-img" />
            <h3 className="irrigation-name">James Miller</h3>
            <p className="irrigation-role">Irrigation Specialist</p>
            <p className="irrigation-info">
              <FaPhoneAlt className="irrigation-icon" /> +1 416 555 1122
            </p>
            <p className="irrigation-info">
              <FaEnvelope className="irrigation-icon" /> james@premierlandscape.com
            </p>
          </div>

          {/* CARD 2 */}
          <div className="irrigation-card">
            <img src={irrigation2} alt="Person 2" className="irrigation-img" />
            <h3 className="irrigation-name">Sarah Lee</h3>
            <p className="irrigation-role">Project Manager</p>
            <p className="irrigation-info">
              <FaPhoneAlt className="irrigation-icon" /> +1 416 555 3344
            </p>
            <p className="irrigation-info">
              <FaEnvelope className="irrigation-icon" /> sarah@premierlandscape.com
            </p>
          </div>

          {/* CARD 3 */}
          <div className="irrigation-card">
            <img src={irrigation3} alt="Person 3" className="irrigation-img" />
            <h3 className="irrigation-name">Michael Johnson</h3>
            <p className="irrigation-role">Field Supervisor</p>
            <p className="irrigation-info">
              <FaPhoneAlt className="irrigation-icon" /> +1 416 555 5566
            </p>
            <p className="irrigation-info">
              <FaEnvelope className="irrigation-icon" /> michael@premierlandscape.com
            </p>
          </div>

          {/* CARD 4 */}
          <div className="irrigation-card">
            <img src={irrigation4} alt="Person 4" className="irrigation-img" />
            <h3 className="irrigation-name">Emily Davis</h3>
            <p className="irrigation-role">Materials Specialist</p>
            <p className="irrigation-info">
              <FaPhoneAlt className="irrigation-icon" /> +1 416 555 7788
            </p>
            <p className="irrigation-info">
              <FaEnvelope className="irrigation-icon" /> emily@premierlandscape.com
            </p>
          </div>

        </section>
      </main>

     
    </>
  );
};

export default IrrigationContact;
