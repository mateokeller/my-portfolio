import React from "react";
import GalleryComponent from "./GalleryComponent";

const gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-x-2 lg:gap-y-3 lg:h-[60rem] lg:w-[70vw] sm:grid sm:grid-cols-2 sm:gap-x-2 sm:gap-y-4 xs:grid xs:gap-y-3">
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/the-mind.jpg"}
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
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/between-the-stars.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/in-game.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/detras.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/countach.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/australian-open.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/suplemento-vsp.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Paralax"
            projectSubtitle="Paralax"
            projectDescription="Project Description"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/autorretrato.jpg"}
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
