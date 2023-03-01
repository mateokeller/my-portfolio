import React from "react";

const AboutMe = () => {
  return (
    <div className=" flex ">
      <p className="hidden md:block md:font-group-indicator md:[font-size:10rem] md:[width:40rem] md:self-center md:absolute md:transform md:-rotate-90 md:text-gray-03 md:[margin-left:-1em]">
        &lt;ABOUT ME&gt;
      </p>
      <div className="w-full pt-20 mb-72 relative flex flex-col items-center p-4">
        <h2 className="text-yellow-primary text-2xl">INTRODUCTION</h2>
        <h3 className="m-0 [font-size:2rem] mb-4 xs:[max-width:80%] sm:[min-width:100%]">
          Hi, I'm Mateo. <br /> Nice to meet you.
        </h3>
        <p className="text-left md:text-center text-xl max-w-lg">
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
