import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import Technologies from "./sections/Technologies";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

import PaversAndStones from "./pages/PaversAndStones";
import PlantsAndTreesAndSod from "./pages/PlantsAndTreesAndSod";
import MulchAndCompost from "./pages/MulchAndCompost";
import SoilAndSand from "./pages/SoilAndSand";
import GardenEdgingAndWallBlocks from "./pages/GardenEdgingAndWallBlocks";
import OutdoorStructures from "./pages/OutdoorStructures";
import Kerbs from "./pages/Kerbs";
import Vacuum from "./pages/Vacuum";
import PaverLayingMachines from "./pages/PaverLayingMachines";
import CNC from "./pages/CNC";
import Drones from "./pages/Drones";
import Plant from "./pages/Plant";
import DesignAndInstallation from "./pages/DesignAndInstallation";
import LawnMaintenance from "./pages/LawnMaintenance";
import GardeningAndPlanting from "./pages/GardeningAndPlanting";
import TreeAndShrubCare from "./pages/TreeAndShrubCare";
import Hardscaping from "./pages/Hardscaping";
import SeasonalServices from "./pages/SeasonalServices";
import PaversContact from "./pages/PaversContact";
import PlantsContact from "./pages/PlantsContact";
import MulchContact from "./pages/MulchContact";
import SoilContact from "./pages/SoilContact";
import GardenContact from "./pages/GardenContact";
import OutdoorContact from "./pages/OutdoorContact";
import TechnologyContact from "./pages/TechnologyContact";
import ServicesContact from "./pages/ServicesContact";
import ManagementContact from "./pages/ManagementContact";
import LocationsContact from "./pages/LocationsContact";
import LandscapeContact from "./pages/landscape-contact";
import IrrigationContact from "./pages/irrigation-contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* ⭐ Landing Page */}
        <Route
          path="/"
          element={
            <div className="page-wrapper">
              <div id="home"><Hero /></div>
              <div id="about"><About /></div>
              <div id="products"><Products /></div>
              <div id="technologies"><Technologies /></div>
              <div id="services"><Services /></div>
              <div id="contact"><Contact /></div>
            </div>
          }
        />

        {/* ⭐ Product Pages */}
        <Route path="/pavers-and-stones" element={<PaversAndStones />} />
        <Route path="/plants-and-trees-and-sod" element={<PlantsAndTreesAndSod />} />
        <Route path="/mulch-and-compost" element={<MulchAndCompost />} />
<Route path="/soil-and-sand" element={<SoilAndSand />} />
<Route path="/garden-edging-and-wall-blocks" element={<GardenEdgingAndWallBlocks />} />
<Route path="/outdoor-structures" element={<OutdoorStructures />} />
<Route path="/kerbs" element={<Kerbs />} />
<Route path="/mulch" element={<Vacuum />} />
<Route path="/paver-laying" element={<PaverLayingMachines />} />
<Route path="/cnc" element={<CNC />} />
<Route path="/drones" element={<Drones />} />
<Route path="/plant" element={<Plant />} />
<Route path="/design-and-installation" element={<DesignAndInstallation />} />
<Route path="/lawn-maintenance" element={<LawnMaintenance />} />
<Route path="/gardening-and-planting" element={<GardeningAndPlanting />} />
<Route path="/tree-and-shrub-care" element={<TreeAndShrubCare />} />
<Route path="/hardscaping" element={<Hardscaping />} />
<Route path="/seasonal-services" element={<SeasonalServices />} />
<Route path="/pavers-contact" element={<PaversContact />} />
<Route path="/plants-contact" element={<PlantsContact />} />
<Route path="/mulch-contact" element={<MulchContact />} />
<Route path="/soil-contact" element={<SoilContact />} />
<Route path="/garden-contact" element={<GardenContact />} />
<Route path="/outdoor-contact" element={<OutdoorContact />} />
<Route path="/technology-contact" element={<TechnologyContact />} />
<Route path="/services-contact" element={<ServicesContact />} />
<Route path="/management-contact" element={<ManagementContact />} />
<Route path="/locations-contact" element={<LocationsContact />} />
<Route path="/landscaping-contact" element={<LandscapeContact />} />
<Route path="/irrigation-contact" element={<IrrigationContact />} />

        {/* About PDFs */}
        <Route path="/code" element={<div>Code Page</div>} />
        <Route path="/transparency" element={<div>Transparency Page</div>} />
        <Route path="/privacy" element={<div>Privacy Page</div>} />
        <Route path="/sustainability" element={<div>Sustainability Page</div>} />
        <Route path="/supplier" element={<div>Supplier Page</div>} />
        <Route path="/terms" element={<div>Terms Page</div>} />
        <Route path="/standard" element={<div>Standard Terms Page</div>} />
        <Route path="/safety" element={<div>Safety Page</div>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
