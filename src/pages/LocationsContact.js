import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./locations.css";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// 4 LOCATION IMAGES
import loc1 from "../assets/contact/locations/location1.jpg";
import loc2 from "../assets/contact/locations/location2.jpeg";
import loc3 from "../assets/contact/locations/location3.jpeg";
import loc4 from "../assets/contact/locations/location4.jpg";

const LocationsContact = () => {
  return (
    <>
      <Header />

      <main className="locations-wrapper">

        {/* PAGE TITLE SECTION */}
        <div className="locations-title-container">
          <h1 className="locations-main-title">Contact</h1>
          <h2 className="locations-sub-title">Locations</h2>
        </div>

        {/* 4 LOCATION CARDS */}
        <section className="locations-grid">

          {/* CARD 1 */}
          <div className="locations-card">
            <img src={loc1} alt="Location 1" className="locations-img" />
            <h3 className="locations-name">Toronto Facility</h3>
            <p className="locations-role">123 Greenway Road, Toronto, ON</p>

            <p className="locations-info">
              <FaPhoneAlt className="locations-icon" /> +1 416 555 7890
            </p>
            <p className="locations-info">
              <FaEnvelope className="locations-icon" /> toronto@premierlandscape.com
            </p>
          </div>

          {/* CARD 2 */}
          <div className="locations-card">
            <img src={loc2} alt="Location 2" className="locations-img" />
            <h3 className="locations-name">Mississauga Yard</h3>
            <p className="locations-role">45 Meadow Lane, Mississauga, ON</p>

            <p className="locations-info">
              <FaPhoneAlt className="locations-icon" /> +1 905 555 2233
            </p>
            <p className="locations-info">
              <FaEnvelope className="locations-icon" /> mississauga@premierlandscape.com
            </p>
          </div>

          {/* CARD 3 */}
          <div className="locations-card">
            <img src={loc3} alt="Location 3" className="locations-img" />
            <h3 className="locations-name">Brampton Depot</h3>
            <p className="locations-role">88 Pinecrest Drive, Brampton, ON</p>

            <p className="locations-info">
              <FaPhoneAlt className="locations-icon" /> +1 289 555 3344
            </p>
            <p className="locations-info">
              <FaEnvelope className="locations-icon" /> brampton@premierlandscape.com
            </p>
          </div>

          {/* CARD 4 */}
          <div className="locations-card">
            <img src={loc4} alt="Location 4" className="locations-img" />
            <h3 className="locations-name">Scarborough Branch</h3>
            <p className="locations-role">17 Oakridge Ave, Scarborough, ON</p>

            <p className="locations-info">
              <FaPhoneAlt className="locations-icon" /> +1 647 555 9988
            </p>
            <p className="locations-info">
              <FaEnvelope className="locations-icon" /> scarborough@premierlandscape.com
            </p>
          </div>

        </section>
      </main>

      
    </>
  );
};

export default LocationsContact;
