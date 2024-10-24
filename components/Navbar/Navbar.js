"use client";

import { useState } from "react";
import DrawerMainMenuList from "../DrawerMainMenuList/DrawerMainMenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NavbarSearch from "../NavbarSearch/NavbarSearch";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsSearchDrawerOpen(!isSearchDrawerOpen);
  };
  const toggleSearchDrawer = () => {
    setIsSearchDrawerOpen(!isSearchDrawerOpen);
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="mb-[54px]">
      {/* Navbar */}
      <nav
        className="flex justify-between items-center border 
      py-3 px-6 text-gray-800 bg-white fixed top-0 left-0 w-full z-50"
      >
        {/* left side */}
        <div className="flex justify-between gap-8">
          {/* Hamburger Menu Icon */}
          <div className="cursor-pointer" onClick={toggleDrawer}>
            <FontAwesomeIcon
              icon={faBars}
              className={`text-lg  mx-auto ${
                isDrawerOpen ? "text-[#1A73E8]" : "text-gray-500"
              }`}
            />
          </div>

          <div className="cursor-pointer" onClick={toggleSearchDrawer}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`text-lg  mx-auto ${
                isDrawerOpen ? "text-[#1A73E8]" : "text-gray-500"
              }`}
            />
          </div>
        </div>

        {/* Right side */}
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

      {/* Search menu */}
      <div
        className={`fixed top-[54px] left-0 w-full h-[90vh]  text-black transform ${
          isSearchDrawerOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out z-40 overflow-hidden`}
      >
        <NavbarSearch></NavbarSearch>
      </div>
    </div>
  );
};

export default Navbar;
