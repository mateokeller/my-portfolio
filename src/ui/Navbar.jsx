import React, {useState, useEffect} from "react";
import {Link as ReactLink} from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = (props) => {
  const handleToggle = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <ReactLink to="home" spy={true} smooth={true}>
          <img className="logo" src="/altoloho@150x.png"></img>
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
              className="cursor-pointer hover:text-yellow-primary"
            >
              Home
            </ReactLink>
            <ReactLink
              to="about-me"
              spy={true}
              smooth={true}
              offset={-50}
              className="cursor-pointer hover:text-yellow-primary"
            >
              About Me
            </ReactLink>
            <ReactLink
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-300}
              className="cursor-pointer hover:text-yellow-primary"
            >
              Portfolio
            </ReactLink>
            <ReactLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-300}
              className="cursor-pointer hover:text-yellow-primary"
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
