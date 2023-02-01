import React from "react";

const Header = () => {
  return (
    <div className=" h-10">
      <div className="header-content">
        <img className="logo" src="/src/assets/altoloho@150x.png"></img>
        <div className="header-nav">
          <a href="">Github</a> <a href="">Portfolio</a> <a href="">About Me</a>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
