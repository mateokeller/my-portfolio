import React from "react";
import LayersIcon from "@mui/icons-material/Layers";
import TerminalIcon from "@mui/icons-material/Terminal";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <p className="group-indicator">&lt;ABOUT ME&gt;</p>
      <div className="about-me-content">
        <h2 className="text-yellow title">INTRODUCTION</h2>
        <h3 className="subtitle">What I'm Great At</h3>
        <p className="about-me-text">
          Finding creative solutions to problems is something I have always
          enjoyed. As a kid I loved playing around with things that where
          broken, learning how they worked, and fixing them. When I finished
          high school, I knew exactly what I wanted my carrer to be. <br />
          I am finishing up my degree at UADE, where I learned how to apply
          critical thinking and problem-solving strategies to complex projects.
          I'm also working on several projects at a time in order to learn more
          front-end development. <br />
        </p>
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
            <h3 className="text-yellow"></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
