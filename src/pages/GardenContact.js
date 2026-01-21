import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./GardenContact.css";

// IMAGES (place inside: src/assets/contact/garden/)
import person1 from "../assets/contact/garden/person1.png";
import person2 from "../assets/contact/garden/person2.png";
import person3 from "../assets/contact/garden/person3.png";
import person4 from "../assets/contact/garden/person4.png";

import phoneIcon from "../assets/icons/phone-white.jpg";
import emailIcon from "../assets/icons/email-white.jpg";

const GardenContact = () => {
  return (
    <>
      <Header />

      <main className="garden-wrapper">

        {/* PAGE HEADING */}
        <div className="garden-page-heading">
          <h1>Contact</h1>
          <h2>Garden Edging and Wall Blocks</h2>
          <p className="garden-subtext">
            Approved adhensives for suppling garden edging and wall blocks for landscaping.
          </p>
        </div>

        {/* 4 CONTACT CARDS */}
        <section className="garden-card-grid">

          <div className="garden-card">
            <img src={person1} alt="Contact Person" className="garden-img" />
            <h3 className="garden-name">Michael Carter</h3>
            <p className="garden-title">GardenStone Industries</p>

            <div className="garden-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0134</span>
            </div>
            <div className="garden-row">
              <img src={emailIcon} alt="email" /> <span>michael@gardenstone.com</span>
            </div>
          </div>

          <div className="garden-card">
            <img src={person2} alt="Contact Person" className="garden-img" />
            <h3 className="garden-name">Sarah Mitchell</h3>
            <p className="garden-title">WallPro Supplies</p>

            <div className="garden-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0178</span>
            </div>
            <div className="garden-row">
              <img src={emailIcon} alt="email" /> <span>sarah@wallpro.com</span>
            </div>
          </div>

          <div className="garden-card">
            <img src={person3} alt="Contact Person" className="garden-img" />
            <h3 className="garden-name">David Johnson</h3>
            <p className="garden-title">EdgeMaster Co.</p>

            <div className="garden-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0193</span>
            </div>
            <div className="garden-row">
              <img src={emailIcon} alt="email" /> <span>david@edgemaster.com</span>
            </div>
          </div>

          <div className="garden-card">
            <img src={person4} alt="Contact Person" className="garden-img" />
            <h3 className="garden-name">Jessica Palmer</h3>
            <p className="garden-title">Landscape Blocks Ltd.</p>

            <div className="garden-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0182</span>
            </div>
            <div className="garden-row">
              <img src={emailIcon} alt="email" /> <span>jessica@landblocks.com</span>
            </div>
          </div>

        </section>
      </main>

      
    </>
  );
};

export default GardenContact;
