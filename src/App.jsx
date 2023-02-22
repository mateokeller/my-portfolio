import {useEffect, useState} from "react";

import "./index.css";
import Header from "./ui/Header";
import Layout from "./components/layout/Layout";
import Drawer from "./components/Drawer";

function App() {
  // navbar scroll when active state
  const [navbar, setNavbar] = useState(false);
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
      const header = document.querySelector("header");
      if (window.pageYOffset > 0) {
        header.classList.add("header-shadow");
      } else {
        header.classList.remove("header-shadow");
      }
    });
  });

  return (
    <>
      <div>
        <Header handleClick={handleToggle} />
        <div className={drawer ? "opacity" : ""} onClick={handleToggle}></div>
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
