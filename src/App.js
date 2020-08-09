import React from "react";
import "./assets/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/VenueInfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div style={{ height: "1500px", backgroundColor: "indigo" }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venue_info">
        <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
