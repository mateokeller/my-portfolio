import React from "react";

import MyListbox from "../ui/Listbox";
import Gallery from "../ui/Gallery";

const Portfolio = () => {
  return (
    <div className="h-auto relative -top-60 flex xs:justify-center md:justify-start">
      <div className="w-full flex">
        <p className="hidden md:block md:font-group-indicator md:[font-size:10rem] md:[width:40rem] md:self-center md:absolute md:transform md:-rotate-90 md:text-gray-03 md:[margin-left:-1em]">
          &lt;PORTFOLIO&gt;
        </p>
        <div className="w-full pt-20 relative flex flex-col items-center p-4">
          <h2 className="text-yellow-primary text-2xl">PORTFOLIO</h2>
          <h3 className="m-0 [font-size:2rem] mb-4">Some Recent Works</h3>
          <div className="hidden md:flex md:[width:40rem] justify-between items-center font-bold text-xl xs:w-4/5 ">
            <p>All</p>
            <p>Web Development</p>
            <p>Design</p>
          </div>

          <MyListbox />

          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
