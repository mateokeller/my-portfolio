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

  useEffect(() => {
    changeShadow();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeShadow);
  });

  // open drawer function
  const handleToggle = () => {
    setOpenDrawer((prev) => !prev);
  };

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
    // <>
    //   <Header handleClick={handleToggle} />
    //   {drawer ? (
    //     <Drawer styles="drawer drawer-open" />
    //   ) : (
    //     <Drawer styles="drawer drawer-closed" />
    //   )}

    //   <Layout />
    // </>
  );
}

export default App;
