import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./MulchContact.css";

import person1 from "../assets/contact/mulch/person1.png";
import person2 from "../assets/contact/mulch/person2.png";
import person3 from "../assets/contact/mulch/person3.png";
import person4 from "../assets/contact/mulch/person4.png";

import phoneIcon from "../assets/icons/phone-white.jpg";
import emailIcon from "../assets/icons/email-white.jpg";

const MulchContact = () => {
  return (
    <>
      <Header />

      <main className="mulch-wrapper">

        {/* PAGE TITLES */}
        <div className="mulch-page-heading">
          <h1>Contact</h1>
          <h2>Mulch and Compost</h2>
          <p className="mulch-subtext">
            Approved adhesives for supplying mulch and compost for landscaping.
          </p>
        </div>

        {/* 4 CONTACT CARDS */}
        <section className="mulch-card-grid">

          <div className="mulch-card">
            <img src={person1} alt="Contact Person" className="mulch-img" />
            <h3 className="mulch-name">Michael Brown</h3>
            <p className="mulch-title">GreenLand Suppliers</p>

            <div className="mulch-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0148</span>
            </div>

            <div className="mulch-row">
              <img src={emailIcon} alt="email" /> <span>michael@greenland.com</span>
            </div>
          </div>

          <div className="mulch-card">
            <img src={person2} alt="Contact Person" className="mulch-img" />
            <h3 className="mulch-name">Sarah West</h3>
            <p className="mulch-title">EcoSoil Industries</p>

            <div className="mulch-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0172</span>
            </div>

            <div className="mulch-row">
              <img src={emailIcon} alt="email" /> <span>sarah@ecosoil.com</span>
            </div>
          </div>

          <div className="mulch-card">
            <img src={person3} alt="Contact Person" className="mulch-img" />
            <h3 className="mulch-name">David Miller</h3>
            <p className="mulch-title">EarthCore Trading</p>

            <div className="mulch-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0116</span>
            </div>

            <div className="mulch-row">
              <img src={emailIcon} alt="email" /> <span>dthavid@earcore.com</span>
            </div>
          </div>

          <div className="mulch-card">
            <img src={person4} alt="Contact Person" className="mulch-img" />
            <h3 className="mulch-name">Emma Wilson</h3>
            <p className="mulch-title">LandscapePro Solutions</p>

            <div className="mulch-row">
              <img src={phoneIcon} alt="phone" /> <span>+1 202-555-0199</span>
            </div>

            <div className="mulch-row">
              <img src={emailIcon} alt="email" /> <span>emma@landpro.com</span>
            </div>
          </div>

        </section>
      </main>

      
    </>
  );
};

export default MulchContact;
