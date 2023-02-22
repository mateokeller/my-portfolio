import React from "react";
import {Link as ReactLink} from "react-scroll";

const Drawer = (props) => {
  return (
    <div className={props.styles}>
      <ul className="header-nav">
        <li>
          <a href="https://github.com/mateokeller">Github</a>
        </li>
        <li>
          <ReactLink
            to="about-me"
            spy={true}
            smooth={true}
            offset={-50}
            className="pointer"
          >
            About Me
          </ReactLink>
        </li>
        <li>
          <ReactLink
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-300}
            className="pointer"
          >
            Portfolio
          </ReactLink>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
