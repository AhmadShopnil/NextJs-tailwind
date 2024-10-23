"use client";

import { useState } from "react";
import DrawerMainMenuList from "../DrawerMainMenuList/DrawerMainMenuList";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="mb-[54px]">
      {/* Navbar */}
      <nav
        className="flex justify-between items-center border 
      py-3 px-6 text-gray-800 bg-white fixed top-0 left-0 w-full z-50"
      >
        {/* Hamburger Menu Icon */}
        <div className="cursor-pointer" onClick={toggleDrawer}>
          <div className="space-y-2">
            <span className="block w-7 h-1 bg-gray-900"></span>
            <span className="block w-8 h-1 bg-gray-900"></span>
            <span className="block w-7 h-1 bg-gray-900"></span>
          </div>
        </div>

        <div className="text-2xl">Logo</div>
      </nav>

      {/* Drawer Menu (Appears from Below Navbar) */}
      <div
        className={`fixed top-[54px] left-0 w-full h-[90vh]  text-black transform ${
          isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out z-40 overflow-hidden`}
      >
        {/* Grid Menu Cards */}
        <DrawerMainMenuList setIsDrawerOpen={setIsDrawerOpen} />
      </div>
    </div>
  );
};

export default Navbar;
