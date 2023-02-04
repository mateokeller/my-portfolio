import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <p className="group-indicator">&lt;PORTFOLIO&gt;</p>
      <div className="section-content">
        <h2 className="text-yellow title">PORTFOLIO</h2>
        <h3 className="subtitle">Some Recent Works</h3>
        <div className="work-filters">
          <p>All</p>
          <p>UI/UX</p>
          <p>Branding</p>
          <p>Web Development</p>
          <p>Graphic Design</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
