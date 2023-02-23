import React from "react";
import {Link as ReactLink} from "react-scroll";

const Drawer = (props) => {
  return (
    <div className={props.styles}>
      <ul className="header-nav flex justify-evenly gap-12 font-extrabold">
        <li>
          <a
            className="no-underline text-black"
            href="https://github.com/mateokeller"
          >
            Github
          </a>
        </li>
        <li>
          <ReactLink
            to="about-me"
            spy={true}
            smooth={true}
            offset={-50}
            className="cursor-pointer"
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
            className="cursor-pointer"
          >
            Portfolio
          </ReactLink>
        </li>
        <li>
          <ReactLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-300}
            className="cursor-pointer"
          >
            Contact
          </ReactLink>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
