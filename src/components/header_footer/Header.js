import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import websiteData from "../WebsiteData";

const { websiteName, websiteTitle } = websiteData;

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  const handleScroll = () => {
    // console.log('user scrolling');
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: headerShow ? "#2f2f2f" : "transparent",
        boxShadow: "none",
        padding: "10px 0px",
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">{websiteName}</div>
          <div className="header_logo_title">{websiteTitle}</div>
        </div>
        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={(value) => toggleDrawer(value)}
        >
          <MenuIcon />
        </IconButton>
        <SideDrawer
          open={drawerOpen}
          onClose={(value) => toggleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
