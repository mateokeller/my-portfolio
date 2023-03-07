import React from "react";
import LayersIcon from "@mui/icons-material/Layers";
import TerminalIcon from "@mui/icons-material/Terminal";

const CardsContainer = () => {
  return (
    <div className="z-10 xs:flex xs:flex-col xs:items-center md:[align-items:inherit] md:flex md:flex-row py-0 xs:px-0 md:px-5 -top-60 relative gap-8 justify-center">
      <div className="md:[width:30rem] w-4/5 h-auto bg-gray-04 rounded-lg text-white xs:p-8 md:p-12 flex gap-3 flex-col items-center">
        <div className=" p-3  w-fit bg-white text-black flex justify-center items-center rounded-full">
          <LayersIcon fontSize="large" />
        </div>
        <h2 className="mb-0 text-lg">Designer</h2>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <h3 className="mb-0 text-yellow-primary">Things I enjoy designing:</h3>
        <p>UX, UI, Web, Apps, Logos</p>
        <h3 className="text-yellow-primary">Design Tools:</h3>
        <p className="leading-8">
          Illustrator <br /> Photoshop <br /> Figma <br />
          Font Awesome <br />
          Pen & Paper <br />
          Sketch <br />
          Webflow
        </p>
      </div>

      <div className="md:[width:30rem] w-4/5 h-fit bg-gray-04 rounded-lg text-white xs:p-8 md:p-12 flex gap-3 flex-col items-center">
        <div className="p-3 h-fit w-fit bg-white text-black flex justify-center items-center rounded-full">
          <TerminalIcon fontSize="large" />
        </div>
        <h2 className="mb-0 text-lg">Frontend Developer</h2>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
        <h3 className="mb-0 text-yellow-primary">Languages I speak:</h3>
        <p>HTML, CSS, Javascript, Git</p>
        <h3 className="text-yellow-primary">Dev Tools:</h3>
        <p className="leading-8">
          React <br /> Next.js <br />
          Node.js <br />
          Firebase <br />
          Bootstrap <br />
          SASS <br />
          Github <br />
          Typescript
        </p>
      </div>
    </div>
  );
};

export default CardsContainer;
