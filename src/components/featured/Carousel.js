import React from "react";
import Slider from "react-slick";
import websiteData from "../WebsiteData";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  const { arianaImage } = websiteData;
  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: "hidden", height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        {arianaImage.map((arianaImage) => {
          return (
            <div key={arianaImage}>
              <div
                className="carrousel_image"
                style={{
                  background: `url(${arianaImage})`,
                  height: `${window.innerHeight}px`,
                }}
              ></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
