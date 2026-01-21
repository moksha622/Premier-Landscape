import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

// Product icons
import paversImg from "../assets/products/pavers-stones.jpg";
import plantsImg from "../assets/products/plants-trees-sod.png";
import mulchImg from "../assets/products/mulch-compost.jpg";
import soilImg from "../assets/products/soil-sand.png";
import gardenImg from "../assets/products/garden-edging.jpg";
import outdoorImg from "../assets/products/outdoor-structures.jpg";

// Service icons
import techImg from "../assets/technologies/technology.png";
import servicesImg from "../assets/services/services.png";
import managementImg from "../assets/services/management.jpg";
import locationsImg from "../assets/icons/location.jpg";

// Additional cards icons
import landscapingImg from "../assets/products/landscaping.jpg";
import irrigationImg from "../assets/products/irrigation.jpg";

// Info card icons
import locationIcon from "../assets/icons/location.jpg";
import emailIcon from "../assets/icons/email.jpg";
import phoneIcon from "../assets/icons/phone.jpg";

const Contact = () => {
  // 🔥 FIXED LINKS (all go to correct contact pages)
  const productCards = [
    { name: "Pavers and Stones", img: paversImg, link: "/pavers-contact" },
    { name: "Plants, Trees and Sod", img: plantsImg, link: "/plants-contact" },
    { name: "Mulch and Compost", img: mulchImg, link: "/mulch-contact" },
    { name: "Soil and Sand", img: soilImg, link: "/soil-contact" },
    { name: "Garden Edging and Wall Blocks", img: gardenImg, link: "/garden-contact" },
    { name: "Outdoor Structures", img: outdoorImg, link: "/outdoor-contact" },
  ];

  const serviceCards = [
    { name: "Technology Sales & Licensing", img: techImg, link: "/technology-contact" },
    { name: "Services", img: servicesImg, link: "/services-contact" },
    { name: "Management", img: managementImg, link: "/management-contact" },
    { name: "Locations", img: locationsImg, link: "/locations-contact" },
    { name: "Landscaping", img: landscapingImg, link: "/landscaping-contact" },
    { name: "Irrigation Systems", img: irrigationImg, link: "/irrigation-contact" },
  ];

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Contact Us</h2>

      {/* Products cards */}
      <div className="contact-cards-grid">
        {productCards.map((item, index) => (
          <Link to={item.link} key={index} className="contact-card">
            <div className="contact-card-image-wrapper">
              <img src={item.img} alt={item.name} className="contact-card-image" />
            </div>
            <span className="contact-card-name">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Services cards */}
      <div className="contact-cards-grid">
        {serviceCards.map((item, index) => (
          <Link to={item.link} key={index} className="contact-card">
            <div className="contact-card-image-wrapper">
              <img src={item.img} alt={item.name} className="contact-card-image" />
            </div>
            <span className="contact-card-name">{item.name}</span>
          </Link>
        ))}
      </div>

      {/* First row of info cards: Head Office + Email */}
      <div className="info-row">
        <div className="info-card">
          <img src={locationIcon} alt="Location" />
          <h4>Head Office</h4>
          <p>Premier Landscape HQ</p>
          <p>123 Premier Street, Colombo, Sri Lanka</p>
          <p>
            To see other locations: <Link to="/locations-contact">Please click here</Link>
          </p>
        </div>

        <div className="info-card">
          <img src={emailIcon} alt="Email" />
          <h4>Email Us</h4>
          <Link to="mailto:premierlandscape@gmail.com">
            premierlandscape@gmail.com
          </Link>
        </div>
      </div>

      {/* Additional info cards */}
      <div className="contact-info-grid">
        <div className="info-card">
          <img src={phoneIcon} alt="Phone" />
          <h4>Call Us</h4>
          <p>+94 77 123 4567</p>
          <p>Emergency: +94 77 987 6543</p>
          <p>Fax: +94 11 123 4567</p>
        </div>

        <div className="info-card map-card">
          <iframe
            title="Premier Landscape Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0000000000005!2d79.86124311512345!3d6.927078295123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a123456789%3A0xabcdef123456789!2sPremier%20Landscape!5e0!3m2!1sen!2slk!4v1699999999999!5m2!1sen!2slk"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="info-card">
          <img src={locationIcon} alt="Location" />
          <h4>Premier Landscape Services</h4>
          <p>Responsible: Premier Operator</p>
          <p>Service Station: +45 567890</p>
          <p>Opening Hours:</p>
          <p>Monday - Friday: 06:00 - 21:00</p>
          <p>Saturday: 06:00 - 16:00</p>
          <p>Other openings can be arranged. Please contact us.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
