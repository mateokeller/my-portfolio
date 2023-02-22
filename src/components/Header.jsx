import React from "react";

const Header = () => {
  return (
    <header className="h-screen w-full flex items-center justify-center bg-no-repeat bg-right-bottom md:bg-[url('/src/assets/landing.png')]  xs:justify-center sm:justify-start">
      <p className="group-indicator">&lt;Home&gt;</p>
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
        <button className="btn">CONTACT ME</button>
      </div>
    </header>
  );
};

export default Header;
