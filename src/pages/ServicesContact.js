import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ServicesContact.css";

import person1 from "../assets/contact/services/person1.png";
import person2 from "../assets/contact/services/person2.png";
import person3 from "../assets/contact/services/person3.png";
import person4 from "../assets/contact/services/person4.png";

import phoneIcon from "../assets/icons/phone.jpg";
import emailIcon from "../assets/icons/email.jpg";

const ServicesContact = () => {
  return (
    <>
      <Header />

      <main className="sc-wrapper">

        {/* PAGE TITLES */}
        <div className="sc-title-section">
          <h1 className="sc-main-title">Contact</h1>
          <h2 className="sc-sub-title">Services</h2>
        </div>

        {/* 4 PROFILE CARDS */}
        <section className="sc-card-grid">

          <div className="sc-card">
            <img src={person1} alt="Person 1" className="sc-profile-img" />
            <h3 className="sc-name">John Williams</h3>
            <p className="sc-position">Service Manager – Landscaping</p>

            <div className="sc-info-row">
              <img src={phoneIcon} alt="Phone" />
              <span>+1 234 567 900</span>
            </div>

            <div className="sc-info-row">
              <img src={emailIcon} alt="Email" />
              <span>john@services.com</span>
            </div>
          </div>

          <div className="sc-card">
            <img src={person2} alt="Person 2" className="sc-profile-img" />
            <h3 className="sc-name">Sarah Johnson</h3>
            <p className="sc-position">Maintenance Coordinator</p>

            <div className="sc-info-row">
              <img src={phoneIcon} alt="Phone" />
              <span>+1 234 567 901</span>
            </div>

            <div className="sc-info-row">
              <img src={emailIcon} alt="Email" />
              <span>sarah@services.com</span>
            </div>
          </div>

          <div className="sc-card">
            <img src={person3} alt="Person 3" className="sc-profile-img" />
            <h3 className="sc-name">Daniel Smith</h3>
            <p className="sc-position">Irrigation Specialist</p>

            <div className="sc-info-row">
              <img src={phoneIcon} alt="Phone" />
              <span>+1 234 567 902</span>
            </div>

            <div className="sc-info-row">
              <img src={emailIcon} alt="Email" />
              <span>daniel@services.com</span>
            </div>
          </div>

          <div className="sc-card">
            <img src={person4} alt="Person 4" className="sc-profile-img" />
            <h3 className="sc-name">Emily Brown</h3>
            <p className="sc-position">Operations Supervisor</p>

            <div className="sc-info-row">
              <img src={phoneIcon} alt="Phone" />
              <span>+1 234 567 903</span>
            </div>

            <div className="sc-info-row">
              <img src={emailIcon} alt="Email" />
              <span>emily@services.com</span>
            </div>
          </div>

        </section>

      </main>

      
    </>
  );
};

export default ServicesContact;
