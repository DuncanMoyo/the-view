import React from "react";
import Carousel from "./Carousel";
import Countdown from "./Countdown";
import websiteData from "../WebsiteData";

const { artistName } = websiteData;

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">{artistName}</div>
      </div>
      <Countdown />
    </div>
  );
};

export default Featured;
