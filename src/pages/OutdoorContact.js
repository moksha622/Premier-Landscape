import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./OutdoorContact.css";

// IMAGES (place inside: src/assets/contact/outdoor/)
import person1 from "../assets/contact/outdoor/person1.png";
import person2 from "../assets/contact/outdoor/person2.png";
import person3 from "../assets/contact/outdoor/person3.png";
import person4 from "../assets/contact/outdoor/person4.png";

// Icons
import { FiPhone, FiMail } from "react-icons/fi";

const OutdoorContact = () => {
  const contacts = [
    {
      img: person1,
      name: "John Walker",
      company: "GreenBuild Outdoor",
      phone: "+94 71 234 5678",
      email: "john@greenbuild.com",
    },
    {
      img: person2,
      name: "Sarah Milton",
      company: "Skyline Structures",
      phone: "+94 77 876 5432",
      email: "sarah@skyline.com",
    },
    {
      img: person3,
      name: "David Parker",
      company: "OutdoorPro Engineering",
      phone: "+94 70 998 1122",
      email: "david@outdoorpro.com",
    },
    {
      img: person4,
      name: "Emma Johnson",
      company: "EcoShade Designs",
      phone: "+94 76 221 4455",
      email: "emma@ecoshade.com",
    },
  ];

  return (
    <>
      <Header />

      <main className="oc-wrapper">
        {/* PAGE TITLES */}
        <div className="oc-title-wrapper">
          <h1 className="oc-contact-title">Contact</h1>
          <h2 className="oc-category-title">Outdoor Structures</h2>
          <p className="oc-subtitle">
            Approved adhesives for supplying outdoor structures for landscaping.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <section className="oc-card-grid">
          {contacts.map((item, index) => (
            <div className="oc-card" key={index}>
              <img src={item.img} alt={item.name} className="oc-card-img" />

              <h3 className="oc-name">{item.name}</h3>
              <p className="oc-company">{item.company}</p>

              <p className="oc-info">
                <FiPhone className="oc-icon" /> {item.phone}
              </p>

              <p className="oc-info">
                <FiMail className="oc-icon" /> {item.email}
              </p>
            </div>
          ))}
        </section>
      </main>

      
    </>
  );
};

export default OutdoorContact;
