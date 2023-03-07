import React, {useState} from "react";
import GalleryComponent from "./GalleryComponent";

// import Box from "@mui/material/Box";
// import Fade from "@mui/material/Fade";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const gallery = () => {
  // const [open, setOpen] = useState(false);
  // const [title, setTitle] = useState();
  // const [imagePath, setImagePath] = useState();
  // const [url, setUrl] = useState();
  // const handleOpen = (e) => {
  //   setUrl(e.target.url);
  //   console.log(e.target.url);
  //   setOpen(true);
  // };
  // const handleClose = () => setOpen(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-x-2 lg:gap-y-3 lg:h-[60rem] lg:w-[70vw] sm:grid sm:grid-cols-2 sm:gap-x-2 sm:gap-y-4 xs:grid xs:gap-y-3">
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/producthuntnext.png"}
            url={"https://producthuntnext-amber.vercel.app/"}
            github={"https://github.com/mateokeller/producthuntnext"}
            projectTitle="Product Hunt Clone"
            projectSubtitle="NextJS, Firebase"
            projectDescription="ProductHunt clone that allows users to log in, upload, comment and vote on products"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/product-list.jpg"}
            url={"https://effervescent-pony-9bfde4.netlify.app/"}
            github={"https://github.com/mateokeller/crudredux"}
            projectTitle="Product List"
            projectSubtitle="ReactJ, Redux"
            projectDescription="CRUD product list which allows adding, edditing, and deleting products"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/Tindog.png"}
            url={"https://deluxe-flan-fc0b29.netlify.app/"}
            github={"https://github.com/mateokeller/TinDog"}
            projectTitle="Tindog"
            projectSubtitle="HTML, CSS and Bootstrap"
            projectDescription="A tinder website for Dogs"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/ToDo-list.png"}
            url={"https://codesandbox.io/s/github/mateokeller/ToDo-List"}
            github={"https://github.com/mateokeller/ToDo-List"}
            projectTitle="ToDo-List"
            projectSubtitle="ReactJS"
            projectDescription="A JavaScript to do list"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/calculator-app.png"}
            url={"https://calculator-app-amber-psi.vercel.app/"}
            github={"https://github.com/mateokeller/calculator-app"}
            projectTitle="Calculator App"
            projectSubtitle="React Js"
            projectDescription="calculator app with multiple operations"
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
        <div className="rounded-lg shadow-xl lg:row-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/fullSize-portfolio.png"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Portfolio"
            projectSubtitle="HTML CSS React, Tailwind"
            projectDescription="Portfolio made for personal use"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:col-span-2 lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/Parallax Landing.jpg"}
            url={"https://remarkable-kleicha-3888bc.netlify.app/"}
            github={"https://github.com/mateokeller/Paralax-Landing"}
            projectTitle="Parallax"
            projectSubtitle="HTML, CSS, JavaScript"
            projectDescription="Made Purely with HTML CSS and JavaScript, to create a parallax effecr on Scroll"
          />
        </div>
        <div className="rounded-lg shadow-xl lg:h-auto m:h-[250px]">
          <GalleryComponent
            imagePath={"/projects-imgs/simon-game-challenge.png"}
            url={"https://portfolio-mateokeller.vercel.app/"}
            github={"https://github.com/mateokeller/my-portfolio"}
            projectTitle="Simon Game Challenge"
            projectSubtitle="HTML, CSS, JavaScript"
            projectDescription="Simon game made with HTML, CSS and JavaScript"
          />
        </div>
      </div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal> */}
    </div>
  );
};

export default gallery;
