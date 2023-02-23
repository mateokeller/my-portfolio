import {useEffect, useState} from "react";

import "./index.css";
import Navbar from "./ui/Navbar";
import Layout from "./components/layout/Layout";
import Drawer from "./components/Drawer";

function App() {
  // navbar scroll when active state
  const [drawer, setOpenDrawer] = useState(false);

  // navbar scroll addShadow function
  const changeShadow = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // open drawer function
  const handleToggle = () => {
    setOpenDrawer((prev) => !prev);
  };

  useEffect(() => {
    // adding the event when scroll change background
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar-container");
      if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-shadow");
      } else {
        navbar.classList.remove("navbar-shadow");
      }
    });
  });

  return (
    <>
      <div>
        <Navbar handleClick={handleToggle} />
        <div
          className={
            drawer ? "bg-black/40 fixed w-full h-screen [z-index:3;]" : ""
          }
          onClick={handleToggle}
        ></div>
        {drawer ? (
          <Drawer styles="drawer drawer-open" />
        ) : (
          <Drawer styles="drawer drawer-closed" />
        )}

        <Layout />
      </div>
    </>
  );
}

export default App;
