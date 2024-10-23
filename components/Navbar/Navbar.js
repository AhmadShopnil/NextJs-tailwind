"use client";

import { useState } from "react";
import MainMenuList from "../MainMenuList/MainMenuList";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center border p-5 text-gray-800 bg-white fixed top-0 left-0 w-full z-50">
        {/* Hamburger Menu Icon */}
        <div className="cursor-pointer" onClick={toggleDrawer}>
          <div className="space-y-2">
            <span className="block w-8 h-1 bg-gray-900"></span>
            <span className="block w-8 h-1 bg-gray-900"></span>
            <span className="block w-8 h-1 bg-gray-900"></span>
          </div>
        </div>

        <div className="text-2xl">Logo</div>
      </nav>

      {/* Drawer Menu (Appears from Below Navbar) */}
      <div
        className={`absolute top-[64px] left-0 w-full h-[80vh] bg-gray-100 text-black transform ${
          isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        {/* Close Button */}
        {/* <div className="flex justify-end p-5">
          <button className="text-2xl" onClick={toggleDrawer}>
            &times;
          </button>
        </div> */}

        {/* Grid Menu Cards */}
        <MainMenuList />
      </div>
    </div>
  );
};

export default Navbar;
