import React, {useState} from "react";
import {Link as ReactLink} from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Drawer from "../components/Drawer";

const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggle = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <ReactLink to="home" spy={true} smooth={true}>
          <img className="logo" src="/src/assets/altoloho@150x.png"></img>
        </ReactLink>

        <div className="tablet-nav">
          <div className="header-nav">
            <button className="nav-menu" onClick={handleToggle}>
              {openMenu ? (
                <MenuIcon fontSize="large" />
              ) : (
                <CloseIcon fontSize="large" />
              )}
            </button>
          </div>
          {openMenu ? (
            <Drawer styles="drawer drawer-closed" />
          ) : (
            <Drawer styles="drawer drawer-open" />
          )}
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
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
