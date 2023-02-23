import React from "react";
import {Link as ReactLink} from "react-scroll";

const Header = () => {
  return (
    <header className="h-screen w-full flex items-center justify-center bg-no-repeat bg-right-bottom bg-auto-100%  md:bg-[url('/src/assets/landing.png')]  xs:justify-center sm:justify-start">
      <p className="hidden md:block md:font-group-indicator md:[font-size:10rem] md:[width:40rem] md:self-center md:absolute md:transform md:-rotate-90 md:text-gray-03 md:[margin-left:-1em]">
        &lt;Home&gt;
      </p>
      <div className=" flex w-64 text-left gap-1 md:ml-40 absolute flex-col sm:ml-24 xs:m-0 xs:flex xs:flex-col xs:text-left">
        <h1 className="text-6xl font-extrabold mb-0 xs:text-left">
          MATEO KELLER<span className="text-yellow-primary">.</span>
        </h1>
        <h2 className="mt-0 font-extrabold text-xl">Front-end Developer</h2>
        <div className="w-20 h-0.5 bg-yellow-primary"></div>
        <p className="font-extrabold text-xl no-underline text-black">
          <a
            className="font-extrabold text-xl no-underline text-black"
            href="https://github.com/mateokeller"
          >
            Github
          </a>
          |
          <a
            className="font-extrabold text-xl no-underline text-black"
            href="http://www.linkedin.com/in/mateo-keller"
          >
            LinkedIn
          </a>
        </p>
        <p className="font-extrabold text-xl no-underline text-black">
          <a
            className="font-extrabold text-xl no-underline text-black"
            href="https://www.instagram.com/mateo.keller/"
          >
            Instagram
          </a>
          |
          <a
            className="font-extrabold text-xl no-underline text-black"
            href="https://dribbble.com/mateokeller"
          >
            Dribbble
          </a>
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
