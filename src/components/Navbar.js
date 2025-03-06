import React, { useState } from "react";
import Style from "./Navbar.module.css";

import { BsList, BsXLg } from "react-icons/bs";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen((preState) => !preState);
  };

  return (
    <header>
      <img
        className={Style.logo}
        src="https://www.inflection.org.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinflectionORG.8a8d3616.png&w=1920&q=75"
      />
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div id={Style.menuIconContainer}>
        {!isDrawerOpen ? (
          <BsList size={30} id={Style.menuIcon} onClick={handleDrawer} />
        ) : (
          <BsXLg size={30} id={Style.menuCloseIcon} onClick={handleDrawer} />
        )}
      </div>

      {/* Mobile Drawer */}
      <div
        className={`${Style.mobileDrawer} ${
          isDrawerOpen ? Style.drawerActive : ""
        }`}
      >
        <aside>
          <div>
            <img
              className={Style.logo}
              src="https://www.inflection.org.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FinflectionORG.8a8d3616.png&w=1920&q=75"
            />
            <BsXLg size={30} id={Style.menuCloseIcon} onClick={handleDrawer} />
          </div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </aside>
      </div>
    </header>
  );
}

export default Navbar;
