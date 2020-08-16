import React from "react";
import MyButton from "../UI/MyButton";
import Zoom from "react-reveal/Zoom";

const PricingDetails = {
  sections: [
    {
      price: 100,
      position: "Balcony",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
      linkTo: "http//sales/b",
      delay: 500,
    },
    {
      price: 150,
      position: "Medium",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      linkTo: "http//sales/m",
      delay: 0,
    },
    {
      price: 250,
      position: "Balcony",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      linkTo: "http//sales/s",
      delay: 600,
    },
  ],
};

const {sections} = PricingDetails

const showBoxes = () =>
  sections.map(({ delay, description, position, linkTo, price }) => (
    <Zoom key={price} delay={delay}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${price}</span>
            <span>{position}</span>
          </div>
          <div className="pricing_description">{description}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              bck="#ffa800"
              color="#ffffff"
              link={linkTo}
            />
          </div>
        </div>
      </div>
    </Zoom>
  ));

const Pricing = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
