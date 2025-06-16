import React from "react";
import GalleryComponent from "./GalleryComponent";

import Countach from "../../public/projects-pdfs/Countach.pdf";

const gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-x-2 lg:gap-y-3 lg:h-[60rem] lg:w-[70vw] sm:grid sm:grid-cols-2 sm:gap-x-2 sm:gap-y-4 xs:grid xs:gap-y-3">
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/ekipe-c-landing.png"}
            url={"https://www.ekipe-c.com.br/"}
            github={""}
            projectTitle="Ekipe-C Landing"
            projectSubtitle="Figma, Illustrator, Photoshop"
            projectDescription="Website designed for Brasilian company"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/Dona-Sangre.jpg"}
            url={"https://graceful-selkie-08b8af.netlify.app/"}
            github={"https://github.com/mateokeller/Dona-sangre"}
            projectTitle="Donando Sangre ONG"
            projectSubtitle="HTML, CSS, Javascript, Jquery"
            projectDescription="redesign of an outdated web for an NGO located in Argentina"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/mcf-studio.png"}
            url={"https://mcf.framer.website/"}
            github={""}
            projectTitle="MCF Studio"
            projectSubtitle="Framer"
            projectDescription="Web Design using Framer"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/SEIAR_Landing.png"}
            url={"https://seiar.framer.website/"}
            github={" "}
            projectTitle="SEIAR"
            projectSubtitle="Framer"
            projectDescription="Full redesign for a client using framer, fully functional website."
            alignLeft={true}
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/detras.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={" "}
            projectTitle="Space Age"
            projectSubtitle="3DS Max"
            projectDescription="Space ship render for the cover of The Impossible Planet, by Phillip K. Dick - The render was inspired by the Space Age"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/countach.jpg"}
            url={Countach}
            github={
              "https://issuu.com/preentregakellermateo/docs/entregafinalissu"
            }
            projectTitle="Countach"
            projectSubtitle="InDesign, Illustrator, Photoshop"
            projectDescription="3 book set about some of the most iconic Lamborghini models designed ny me"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/australian-open.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={" "}
            projectTitle="Australian Open"
            projectSubtitle="Illustator, Photoshop"
            projectDescription="Flyer designed for a private event located in Buenos Aires, Argentina"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/suplemento-vsp.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={" "}
            projectTitle="Editorial Supplement"
            projectSubtitle="InDesign, Illustrator, Photoshop"
            projectDescription="Editorial Supplement designed for the Centro Cultural Kirchner"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/autorretrato.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={" "}
            projectTitle="Self Portrait"
            projectSubtitle="Illustrator, Lightroom, Photoshop "
            projectDescription="Self Portrait project made for a contest in the Universidad Argentina de la Empresa (UADE)"
          />
        </div>
      </div>
    </div>
  );
};

export default gallery;
