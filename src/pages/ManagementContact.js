import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./management.css";

// IMAGES (place 4 images here)
import person1 from "../assets/contact/management/person1.png";
import person2 from "../assets/contact/management/person2.png";
import person3 from "../assets/contact/management/person3.png";
import person4 from "../assets/contact/management/person4.png";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ManagementContact = () => {
  return (
    <>
      <Header />

      <main className="management-wrapper">

        {/* PAGE TITLES */}
        <div className="management-title-container">
          <h1 className="management-main-title">Contact</h1>
          <h2 className="management-sub-title">Management</h2>
        </div>

        {/* 4 MANAGEMENT CARDS */}
        <section className="management-grid">

          {/* CARD 1 */}
          <div className="management-card">
            <img src={person1} alt="Manager 1" className="management-img" />
            <h3 className="management-name">John Anderson</h3>
            <p className="management-role">Operations Manager</p>

            <p className="management-info">
              <FaPhoneAlt className="management-icon" /> +1 555 234 678
            </p>
            <p className="management-info">
              <FaEnvelope className="management-icon" /> john@premierlandscape.com
            </p>
          </div>

          {/* CARD 2 */}
          <div className="management-card">
            <img src={person2} alt="Manager 2" className="management-img" />
            <h3 className="management-name">Sarah Mitchell</h3>
            <p className="management-role">Project Coordinator</p>

            <p className="management-info">
              <FaPhoneAlt className="management-icon" /> +1 555 987 432
            </p>
            <p className="management-info">
              <FaEnvelope className="management-icon" /> sarah@premierlandscape.com
            </p>
          </div>

          {/* CARD 3 */}
          <div className="management-card">
            <img src={person3} alt="Manager 3" className="management-img" />
            <h3 className="management-name">Michael Roberts</h3>
            <p className="management-role">Logistics Supervisor</p>

            <p className="management-info">
              <FaPhoneAlt className="management-icon" /> +1 555 112 556
            </p>
            <p className="management-info">
              <FaEnvelope className="management-icon" /> michael@premierlandscape.com
            </p>
          </div>

          {/* CARD 4 */}
          <div className="management-card">
            <img src={person4} alt="Manager 4" className="management-img" />
            <h3 className="management-name">Emily Carter</h3>
            <p className="management-role">Customer Relations Lead</p>

            <p className="management-info">
              <FaPhoneAlt className="management-icon" /> +1 555 678 990
            </p>
            <p className="management-info">
              <FaEnvelope className="management-icon" /> emily@premierlandscape.com
            </p>
          </div>

        </section>

      </main>

      
    </>
  );
};

export default ManagementContact;
