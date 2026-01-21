import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./TechnologyContact.css";

import { FiPhone, FiMail } from "react-icons/fi";

// IMAGES (place inside: src/assets/contact/technology/)
import person1 from "../assets/contact/technology/person1.png";
import person2 from "../assets/contact/technology/person2.png";
import person3 from "../assets/contact/technology/person3.png";
import person4 from "../assets/contact/technology/person4.png";

const TechnologyContact = () => {
  const contacts = [
    {
      img: person1,
      name: "Liam Anderson",
      company: "TechLand Innovations",
      phone: "+94 71 456 7890",
      email: "liam@techland.com",
    },
    {
      img: person2,
      name: "Sophia Reynolds",
      company: "GreenTech Systems",
      phone: "+94 77 321 6549",
      email: "sophia@greentech.com",
    },
    {
      img: person3,
      name: "Ethan Williams",
      company: "FutureScape Technologies",
      phone: "+94 70 888 1122",
      email: "ethan@futurescape.com",
    },
    {
      img: person4,
      name: "Ava Thompson",
      company: "EcoSmart Engineering",
      phone: "+94 76 347 9988",
      email: "ava@ecosmart.com",
    },
  ];

  return (
    <>
      <Header />

      <main className="tc-wrapper">

        {/* PAGE HEADER TITLES */}
        <div className="tc-title-wrapper">
          <h1 className="tc-contact-title">Contact</h1>
          <h2 className="tc-category-title">Technology Sales & Licensing</h2>
          <p className="tc-subtitle">
            Approved adhesives for supplying technology sales & licensing for landscaping.
          </p>
        </div>

        {/* 4 CONTACT CARDS */}
        <section className="tc-card-grid">
          {contacts.map((item, index) => (
            <div className="tc-card" key={index}>
              <img src={item.img} alt={item.name} className="tc-card-img" />

              <h3 className="tc-name">{item.name}</h3>
              <p className="tc-company">{item.company}</p>

              <p className="tc-info">
                <FiPhone className="tc-icon" /> {item.phone}
              </p>

              <p className="tc-info">
                <FiMail className="tc-icon" /> {item.email}
              </p>
            </div>
          ))}
        </section>
      </main>

      
    </>
  );
};

export default TechnologyContact;
