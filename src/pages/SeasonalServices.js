import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SeasonalServices.css";

// HERO IMAGE
import seasonalMainImage from "../assets/services/season/season-main.jpg";

// 11 IMAGES
import springCleanupImg from "../assets/services/season/spring-cleanup.jpg";
import lawnPrepImg from "../assets/services/season/lawn-prep.jpeg";
import seasonalPlantingImg from "../assets/services/season/seasonal-planting.jpeg";
import weedControlImg from "../assets/services/season/weed-control.jpeg";
import irrigationImg from "../assets/services/season/irrigation.jpeg";
import fallCleanupImg from "../assets/services/season/fall-cleanup.jpg";
import leafRemovalImg from "../assets/services/season/leaf-removal.jpeg";
import aerationImg from "../assets/services/season/aeration.jpg";
import bulbPlantingImg from "../assets/services/season/bulb-planting.jpeg";
import gutterCleaningImg from "../assets/services/season/gutter-cleaning.jpg";
import holidayLightsImg from "../assets/services/season/holiday-lighting.jpeg";

const SeasonalServices = () => {
  return (
    <>
      <Header />

      <main className="season-wrapper">

        {/* HERO IMAGE */}
        <div className="season-main-image">
          <img src={seasonalMainImage} alt="Seasonal Services" />
          <div className="season-overlay-title">Seasonal Services</div>
        </div>

        {/* DESCRIPTION */}
        <section className="season-description">
          <p>
            Seasonal services in landscaping are tasks that fluctuate in demand with the 
            time of year and are essential for year-round property maintenance.
          </p>
        </section>

        {/* GRID — 11 ITEMS */}
        <section className="season-grid-eleven">

          <div className="season-card">
            <img src={springCleanupImg} alt="Spring Cleanups" />
            <p className="season-text">
              Spring Cleanups: Removing debris, leaves, and branches that accumulated over the winter.
            </p>
          </div>

          <div className="season-card">
            <img src={lawnPrepImg} alt="Lawn Preparation" />
            <p className="season-text">
              Lawn Preparation: Dethatching, aeration, and initial fertilization to promote healthy growth.
            </p>
          </div>

          <div className="season-card">
            <img src={seasonalPlantingImg} alt="Seasonal Planting" />
            <p className="season-text">
              Seasonal Planting: Installing spring-flowering annuals and perennials for color displays.
            </p>
          </div>

          <div className="season-card">
            <img src={weedControlImg} alt="Weed Control" />
            <p className="season-text">
              Weed Control and Pest Management: Applying treatments to protect plants from insects and weeds.
            </p>
          </div>

          <div className="season-card">
            <img src={irrigationImg} alt="Irrigation Maintenance" />
            <p className="season-text">
              Watering and Irrigation Maintenance: Ensuring proper hydration during hot periods and adjusting systems.
            </p>
          </div>

          <div className="season-card">
            <img src={fallCleanupImg} alt="Fall Cleanups" />
            <p className="season-text">
              Fall Cleanups: Tidying the yard, removing dead plants, and trimming overgrown vegetation.
            </p>
          </div>

          <div className="season-card">
            <img src={leafRemovalImg} alt="Leaf Removal" />
            <p className="season-text">
              Leaf Removal: Collecting fallen leaves to prevent lawn damage and disease.
            </p>
          </div>

          <div className="season-card">
            <img src={aerationImg} alt="Aeration" />
            <p className="season-text">
              Aeration and Overseeding: Preparing the lawn for winter and encouraging dense spring growth.
            </p>
          </div>

          <div className="season-card">
            <img src={bulbPlantingImg} alt="Planting Bulbs" />
            <p className="season-text">
              Planting Bulbs: Installing spring-flowering bulbs in fall for seasonal blooms.
            </p>
          </div>

          <div className="season-card">
            <img src={gutterCleaningImg} alt="Gutter Cleaning" />
            <p className="season-text">
              Gutter Cleaning: Removing leaves and debris to ensure proper drainage before winter.
            </p>
          </div>

          <div className="season-card">
            <img src={holidayLightsImg} alt="Holiday Lighting" />
            <p className="season-text">
              Holiday Lighting Installation and Takedown: Festive lights for homes and businesses.
            </p>
          </div>

        </section>
      </main>

      
    </>
  );
};

export default SeasonalServices;
