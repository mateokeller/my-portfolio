import React from "react";
import GalleryComponent from "./GalleryComponent";

const gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-x-2 lg:gap-y-3 lg:h-[60rem] lg:w-[70vw] sm:grid sm:grid-cols-2 sm:gap-x-2 sm:gap-y-4 xs:grid xs:gap-y-3">
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/producthuntnext.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/product-list.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/Tindog.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/ToDo-list.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/calculator-app.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/Dona-Sangre.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/fullSize-portfolio.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/Parallax Landing.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/simon-game-challenge.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
      </div>
    </div>
  );
};

export default gallery;
