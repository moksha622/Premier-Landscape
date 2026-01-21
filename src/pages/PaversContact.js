import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./paversContact.css";

import person1 from "../assets/contact/stones/person2.png";
import person2 from "../assets/contact/stones/person1.jpg";
import person3 from "../assets/contact/stones/person3.png";
import person4 from "../assets/contact/stones/person4.png";

import phoneIcon from "../assets/icons/phone.jpg";
import emailIcon from "../assets/icons/email.jpg";

const PaversContact = () => {
  const people = [
    {
      img: person1,
      name: "John Smith",
      company: "StoneBuild Contractors",
      phone: "+1 202 345 9876",
      email: "john@stonebuild.com",
    },
    {
      img: person2,
      name: "Emily Davis",
      company: "RockSolid Landscaping",
      phone: "+1 514 789 2345",
      email: "emily@rocksolid.com",
    },
    {
      img: person3,
      name: "Michael Lee",
      company: "UrbanPave Solutions",
      phone: "+1 303 456 7890",
      email: "michael@urbanpave.com",
    },
    {
      img: person4,
      name: "Sarah Johnson",
      company: "GreenEarth Paving",
      phone: "+1 647 555 1221",
      email: "sarah@greenearthpaving.com",
    },
  ];

  return (
    <>
      <Header />

      <div className="pc-wrapper">
        {/* Contact Title */}
        <h1 className="pc-title">Contact</h1>

        {/* Pavers and Stones Title */}
        <h2 className="pc-sub-title">Pavers and Stones</h2>

        {/* Description */}
        <p className="pc-description">
          Approved adhesives for supplying pavers and stones for landscaping.
        </p>

        {/* 4 Horizontal Cards */}
        <div className="pc-card-row">
          {people.map((person, index) => (
            <div className="pc-card" key={index}>
              <img src={person.img} alt={person.name} className="pc-card-img" />

              <h3 className="pc-person-name">{person.name}</h3>
              <p className="pc-company">{person.company}</p>

              <div className="pc-contact-line">
                <img src={phoneIcon} alt="Phone" />
                <span>{person.phone}</span>
              </div>

              <div className="pc-contact-line">
                <img src={emailIcon} alt="Email" />
                <span>{person.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
};

export default PaversContact;
