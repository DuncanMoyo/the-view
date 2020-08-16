import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../UI/MyButton";
import websiteData from "../WebsiteData";

const { discountAlert, discountDetails } = websiteData;

const Discount = () => {
  const [discountStart, setDiscountStart] = useState(0);
  const [discountEnd] = useState(30);

  const percentage = () => {
    if (discountStart < discountEnd) {
      setDiscountStart(discountStart + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      percentage();
    }, 30);
  }, [discountStart]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade onReveal={() => percentage()}>
          <div className="discount_percentage">
            <span>{discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>{discountAlert}</h3>
            <p>{discountDetails}</p>
            <MyButton
              text="Purchase tickets"
              bck="#ffa800"
              color="#ffffff"
              link="https://www.google.com/"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
