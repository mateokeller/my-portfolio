import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img className="logo" src="/src/assets/altoloho@150x.png"></img>
        <div className="header-nav">
          <a href="https://github.com/mateokeller">Github</a>{" "}
          <a href="">Portfolio</a> <a href="">About Me</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
