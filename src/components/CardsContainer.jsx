import React from "react";
import LayersIcon from "@mui/icons-material/Layers";
import TerminalIcon from "@mui/icons-material/Terminal";

const CardsContainer = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="icon-container">
          <LayersIcon fontSize="large" />
        </div>
        <h2>Designer</h2>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <h3 className="text-yellow">Things I enjoy designing:</h3>
        <p>UX, UI, Web, Apps, Logos</p>
        <h3 className="text-yellow">Design Tools:</h3>
        <p className="tools-list">
          Illustrator <br /> Photoshop <br /> Figma <br />
          Font Awesome <br />
          Pen & Paper <br />
          Sketch <br />
          Webflow
        </p>
      </div>
      <div className="card">
        <div className="icon-container">
          <TerminalIcon fontSize="large" />
        </div>
        <h2>Frontend Developer</h2>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <h3 className="text-yellow">Languages I speak:</h3>
        <p>HTML, CSS, Javascript, Git</p>
        <h3 className="text-yellow">Dev Tools:</h3>
        <p className="tools-list">
          React <br /> Next.js <br />
          Node.js <br />
          Firebase <br />
          SASS <br />
          Github <br />
          Typescript
        </p>
      </div>
    </div>
  );
};

export default CardsContainer;
