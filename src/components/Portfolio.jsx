import React, {useState} from "react";

import MyListbox from "../ui/Listbox";
import GalleryDev from "../ui/GalleryDev";
import GalleryDesign from "../ui/GalleryDesign";

const Portfolio = () => {
  const [category, setCategory] = useState("Dev");

  // const handleToggle = () => {
  //   setCategory((prev) => !prev);
  //   console.log(category);
  // };

  return (
    <div className="h-auto relative -top-60 flex xs:justify-center md:justify-start">
      <div className="w-full flex">
        <p className="hidden md:block md:font-group-indicator md:[font-size:10rem] md:[width:40rem] md:self-center md:absolute md:transform md:-rotate-90 md:text-gray-03 md:[margin-left:-1em]">
          &lt;PORTFOLIO&gt;
        </p>
        <div className="w-full pt-20 relative flex flex-col items-center p-4">
          <h2 className="text-yellow-primary text-2xl">PORTFOLIO</h2>
          <h3 className="m-0 [font-size:2rem] mb-4">Some Recent Works</h3>
          <div className="hidden md:flex md:[width:26rem] justify-between items-center font-bold text-xl xs:w-4/5 ">
            <button
              className="hover:text-yellow-primary"
              onClick={() => {
                setCategory("Dev");
              }}
            >
              Web Development
              {category === "Dev" ? (
                <div className="w-20 h-0.5 bg-yellow-primary"></div>
              ) : null}
            </button>

            <button
              className="hover:text-yellow-primary"
              onClick={() => {
                setCategory("Design");
              }}
            >
              Design
              {category === "Design" ? (
                <div className="w-20 h-0.5 bg-yellow-primary"></div>
              ) : null}
            </button>
          </div>

          <MyListbox />

          {category === "Dev" ? <GalleryDev /> : null}
          {category === "Design" ? <GalleryDesign /> : null}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
