import React from "react";
import Fade from "react-reveal/Fade";
import websiteData from "../WebsiteData";

const { copyright, websiteName } = websiteData;

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">{websiteName}</div>
        <div className="footer_copyright">{copyright}</div>
      </Fade>
    </footer>
  );
};

export default Footer;
