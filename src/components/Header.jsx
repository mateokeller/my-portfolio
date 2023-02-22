import React from "react";
import {Link as ReactLink} from "react-scroll";

const Header = () => {
  return (
    <header className="h-screen w-full flex items-center justify-center bg-no-repeat bg-right-bottom bg-auto-100%  md:bg-[url('/src/assets/landing.png')]  xs:justify-center sm:justify-start">
      <p className="hidden lg:block lg:font-group-indicator lg:[font-size:10rem] lg:[width:40rem] lg:self-center lg:absolute lg:transform lg:-rotate-90 lg:text-gray-03 lg:[margin-left:-1em]">
        &lt;Home&gt;
      </p>
      <div className="text-container">
        <h1>
          MATEO KELLER<span>.</span>
        </h1>
        <h2>Front-end Developer</h2>
        <div className="h-line"></div>
        <p className="socials-text">
          <a href="https://github.com/mateokeller">Github</a>|
          <a href="http://www.linkedin.com/in/mateo-keller">LinkedIn</a>
        </p>
        <p className="socials-text">
          <a href="https://www.instagram.com/mateo.keller/">Instagram</a>|
          <a href="https://dribbble.com/mateokeller">Dribbble</a>
        </p>
        <ReactLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-300}
          className="pointer"
        >
          <button className="btn">CONTACT ME</button>
        </ReactLink>
      </div>
      {/* <img className="" src="/src/assets/landing.png" alt="header-background" /> */}
    </header>
  );
};

export default Header;
