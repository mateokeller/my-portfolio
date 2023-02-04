import React from "react";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <p className="group-indicator">&lt;ABOUT ME&gt;</p>
      <div className="section-content">
        <h2 className="text-yellow title">INTRODUCTION</h2>
        <h3 className="subtitle">Hi, I'm Mateo. Nice to meet you.</h3>
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
      </div>
    </div>
  );
};

export default AboutMe;
