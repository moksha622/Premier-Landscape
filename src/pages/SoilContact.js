import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SoilContact.css";

import person1 from "../assets/contact/soil/person1.png";
import person2 from "../assets/contact/soil/person2.png";
import person3 from "../assets/contact/soil/person3.png";
import person4 from "../assets/contact/soil/person4.png";

import phoneIcon from "../assets/icons/phone-white.jpg";
import emailIcon from "../assets/icons/email-white.jpg";

const SoilContact = () => {
  return (
    <>
      <Header />

      <main className="soil-wrapper">

        {/* PAGE TITLES */}
        <div className="soil-page-heading">
          <h1>Contact</h1>
          <h2>Soil and Sand</h2>
          <p className="soil-subtext">
            Approved adhesives for supplying soil and sand for landscaping.
          </p>
        </div>

        {/* 4 CONTACT CARDS */}
        <section className="soil-card-grid">

          <div className="soil-card">
            <img src={person1} alt="Contact Person" className="soil-img" />
            <h3 className="soil-name">Jonathan Reed</h3>
            <p className="soil-title">SoilBase Industries</p>

            <div className="soil-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0104</span>
            </div>
            <div className="soil-row">
              <img src={emailIcon} alt="email" /> <span>jonathan@soilbase.com</span>
            </div>
          </div>

          <div className="soil-card">
            <img src={person2} alt="Contact Person" className="soil-img" />
            <h3 className="soil-name">Emily Turner</h3>
            <p className="soil-title">EcoGrow Supplies</p>

            <div className="soil-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0141</span>
            </div>
            <div className="soil-row">
              <img src={emailIcon} alt="email" /> <span>emily@ecogrow.com</span>
            </div>
          </div>

          <div className="soil-card">
            <img src={person3} alt="Contact Person" className="soil-img" />
            <h3 className="soil-name">Robert Wilson</h3>
            <p className="soil-title">EarthRoots Trading</p>

            <div className="soil-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0189</span>
            </div>
            <div className="soil-row">
              <img src={emailIcon} alt="email" /> <span>robert@earthroots.com</span>
            </div>
          </div>

          <div className="soil-card">
            <img src={person4} alt="Contact Person" className="soil-img" />
            <h3 className="soil-name">Isabella Moore</h3>
            <p className="soil-title">Landscape Essentials</p>

            <div className="soil-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0166</span>
            </div>
            <div className="soil-row">
              <img src={emailIcon} alt="email" /> <span>isabella@landscapeessentials.com</span>
            </div>
          </div>

        </section>
      </main>

      
    </>
  );
};

export default SoilContact;
