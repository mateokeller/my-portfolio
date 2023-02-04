import React, {useState} from "react";
import {Link as ReactLink} from "react-scroll";

const Header = (props) => {
  return (
    <div className={props.headerStyles}>
      <div className="header-content">
        <ReactLink to="home" spy={true} smooth={true}>
          <img className="logo" src="/src/assets/altoloho@150x.png"></img>
        </ReactLink>

        <div className="header-nav">
          <a href="https://github.com/mateokeller">Github</a>
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
            to="about-me"
            spy={true}
            smooth={true}
            offset={-50}
            className="pointer"
          >
            About Me
          </ReactLink>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
