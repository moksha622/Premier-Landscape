import React from "react";
import "./About.css";

import aboutImage from "../assets/about.png";
import aboutImage2 from "../assets/about2.png"; // new image below the first

import codeIcon from "../assets/icons/code.png";
import transparencyIcon from "../assets/icons/transparency.png";
import privacyIcon from "../assets/icons/privacy.png";
import sustainabilityIcon from "../assets/icons/sustainability.png";

import supplierIcon from "../assets/icons/supplier.png";
import termsIcon from "../assets/icons/terms.png";
import generalIcon from "../assets/icons/general.png";
import safetyIcon from "../assets/icons/safety.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading">About</h2>

      {/* Top clickable sections (open PDFs in new tabs) */}
      <div className="about-top-links">
        <a
          href="/pdfs/Code of Conduct.pdf"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={codeIcon} alt="Code of Conduct" />
          <span>Code of Conduct</span>
        </a>
        <a
          href="/pdfs/Transparency Act.pdf"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={transparencyIcon} alt="Transparency Act" />
          <span>Transparency Act</span>
        </a>
        <a
          href="/pdfs/Privacy Policy.pdf"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={privacyIcon} alt="Privacy Policy" />
          <span>Privacy Policy</span>
        </a>
        <a
          href="/pdfs/Sustainability Policy.pdf"
          className="about-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={sustainabilityIcon} alt="Sustainability Policy" />
          <span>Sustainability Policy</span>
        </a>
      </div>

      {/* Main content: images on left, text on right */}
      <div className="about-main">
        <div className="about-image">
          <img src={aboutImage} alt="About Premier Landscape" className="main-about-img" />
          <img src={aboutImage2} alt="Additional About Image" className="secondary-about-img" />
        </div>

        <div className="about-text">
          <div className="about-text-block">
            <h3>What we do</h3>
            <p>
              We provide professional landscaping solutions ranging from design, installation,
              maintenance, and sustainable outdoor development.
            </p>
          </div>

          <div className="about-text-block">
            <h3>Our activities</h3>
            <p>
              Our work includes residential, commercial, and industrial landscaping with modern
              technologies.
            </p>
          </div>

          <div className="about-text-block">
            <h3>Where we do business</h3>
            <p>
              We operate in multiple regions and deliver landscaping services to customers
              throughout the country.
            </p>
          </div>

          <div className="about-text-block">
            <h3>Who we are</h3>
            <p>
              We are a team of trained professionals dedicated to environmental sustainability
              and outdoor productivity.
            </p>
          </div>

          <div className="about-text-block">
            <h3>Where we are going</h3>
            <p>
              Our goal is to expand our innovation in landscape technology, automation, and
              sustainability.
            </p>
          </div>

          {/* Bottom clickable sections (open PDFs in new tabs) */}
          <div className="about-bottom-links">
            <a
              href="/pdfs/Supplier Code.pdf"
              className="about-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={supplierIcon} alt="Supplier Code" />
              <span>Supplier Code</span>
            </a>
            <a
              href="/pdfs/Terms & Conditions.pdf"
              className="about-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={termsIcon} alt="Terms & Conditions" />
              <span>Terms & Conditions</span>
            </a>
            <a
              href="/pdfs/General Sales Terms.pdf"
              className="about-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={generalIcon} alt="General Sales Terms" />
              <span>General Sales Terms</span>
            </a>
            <a
              href="/pdfs/Safety & Quality Policy.pdf"
              className="about-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={safetyIcon} alt="Safety & Quality Policy" />
              <span>Safety & Quality Policy</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

          