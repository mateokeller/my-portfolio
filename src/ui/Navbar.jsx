import React, {useState, useEffect} from "react";
import {Link as ReactLink} from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Drawer from "../components/Drawer";

const Navbar = (props) => {
  const handleToggle = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <ReactLink to="home" spy={true} smooth={true}>
          <img className="logo" src="/src/assets/altoloho@150x.png"></img>
        </ReactLink>

        <div className="tablet-nav">
          <div className="header-nav">
            <button className="nav-menu" onClick={props.handleClick}>
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>

        <div className="desktop-nav">
          <div className="header-nav">
            <ReactLink
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              className="pointer"
            >
              Home
            </ReactLink>
            <ReactLink
              to="about-me"
              spy={true}
              smooth={true}
              offset={-50}
              className="pointer"
            >
              About Me
            </ReactLink>
            <ReactLink
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-300}
              className="pointer"
            >
              Portfolio
            </ReactLink>
            <ReactLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-300}
              className="pointer"
            >
              Contact
            </ReactLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
