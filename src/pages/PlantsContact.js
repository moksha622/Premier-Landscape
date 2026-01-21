import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./plantsContact.css";

// IMAGES OF 4 PEOPLE
import person1 from "../assets/contact/plants/person1.png";
import person2 from "../assets/contact/plants/person2.png";
import person3 from "../assets/contact/plants/person3.png";
import person4 from "../assets/contact/plants/person4.png";

// ICONS
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const PlantsContact = () => {
  return (
    <>
      <Header />

      <main className="plants-contact-wrapper">

        {/* PAGE TITLES */}
        <div className="plants-contact-titles">
          <h1 className="plants-main-title">Contact</h1>
          <h2 className="plants-sub-title">Plants and Trees and Sod</h2>
          <p className="plants-description">
            Approved adhesives for supplying plants, trees and sods for landscaping.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <section className="plants-contact-grid">

          <div className="plants-card">
            <img src={person1} alt="Contact Person 1" />
            <h3>Michael Green</h3>
            <p className="company-name">GreenLand Suppliers</p>

            <div className="contact-info">
              <FaPhoneAlt className="icon" />
              <span>+1 (555) 412-9874</span>
            </div>

            <div className="contact-info">
              <FaEnvelope className="icon" />
              <span>m.green@greenland.com</span>
            </div>
          </div>

          <div className="plants-card">
            <img src={person2} alt="Contact Person 2" />
            <h3>Sophia Willow</h3>
            <p className="company-name">Willow Tree Farms</p>

            <div className="contact-info">
              <FaPhoneAlt className="icon" />
              <span>+1 (555) 322-6642</span>
            </div>

            <div className="contact-info">
              <FaEnvelope className="icon" />
              <span>sophia@willowfarms.com</span>
            </div>
          </div>

          <div className="plants-card">
            <img src={person3} alt="Contact Person 3" />
            <h3>Daniel Forest</h3>
            <p className="company-name">Forest Growers Inc.</p>

            <div className="contact-info">
              <FaPhoneAlt className="icon" />
              <span>+1 (555) 281-5532</span>
            </div>

            <div className="contact-info">
              <FaEnvelope className="icon" />
              <span>d.forest@growers.com</span>
            </div>
          </div>

          <div className="plants-card">
            <img src={person4} alt="Contact Person 4" />
            <h3>Emma Leaf</h3>
            <p className="company-name">Leafy Landscaping Supply</p>

            <div className="contact-info">
              <FaPhoneAlt className="icon" />
              <span>+1 (555) 741-2259</span>
            </div>

            <div className="contact-info">
              <FaEnvelope className="icon" />
              <span>emma@leafysupply.com</span>
            </div>
          </div>

        </section>
      </main>

      
    </>
  );
};

export default PlantsContact;
