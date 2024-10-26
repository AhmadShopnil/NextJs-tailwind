"use client";

import { useState } from "react";
import DrawerMainMenuList from "../DrawerMainMenuList/DrawerMainMenuList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import NavbarSearch from "../NavbarSearch/NavbarSearch";
import AccordionMenu from "../Mobile/AccordionMenu";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setIsSearchDrawerOpen(false);
  };

  const toggleSearchDrawer = () => {
    setIsSearchDrawerOpen(!isSearchDrawerOpen);
    setIsDrawerOpen(false);
  };

  // Determine if any drawer is open (either the menu or search)
  const isAnyDrawerOpen = isDrawerOpen || isSearchDrawerOpen;

  return (
    <div className="w-full px-4 relative">
      <nav className="w-full z-50 bg-white relative border-b">
        <div className="container mx-auto flex justify-between items-center py-4 max-w-screen-xl">
          {/* Left side */}
          <div className="flex items-center space-x-4">
            <div className="flex justify-between gap-12">
              {/* Hamburger Menu Icon */}
              <div className="cursor-pointer" onClick={toggleDrawer}>
                <FontAwesomeIcon
                  icon={faBars}
                  className={`text-2xl mx-auto ${
                    isDrawerOpen ? "text-[#1A73E8]" : "text-gray-500"
                  }`}
                />
              </div>

              <div className="cursor-pointer" onClick={toggleSearchDrawer}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={`text-2xl mx-auto ${
                    isSearchDrawerOpen ? "text-[#1A73E8]" : "text-gray-500"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Center */}
          <div>
            <a href="#" className="text-xl font-bold text-[#757575]">
              Think with <span className="text-blue-300">Google</span>
            </a>
          </div>

          {/* Right Side */}
          <div>
            <button className="bg-[#1a73e8] text-white py-2 px-4 rounded-md">
              Log In
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay (background blur/less opacity) */}
      {isAnyDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 backdrop-blur-md"
          onClick={() => {
            setIsDrawerOpen(false);
            setIsSearchDrawerOpen(false);
          }}
        ></div>
      )}

      {/* Drawer Menu (Appears from Below Navbar) */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#F9FAFB] h-[70vh] text-black z-40
           transition-transform duration-500 ease-in-out ${
             isDrawerOpen ? "translate-y-0" : "-translate-y-full"
           }`}
        style={{ top: "64px" }}
      >
        <DrawerMainMenuList setIsDrawerOpen={setIsDrawerOpen} />
      </div>

      {/* Search menu */}
      {/* <div
        className={`flex justify-center fixed top-0 left-0 w-full bg-[#F9FAFB] h-[30vh] text-black z-40 transition-transform duration-500 ease-in-out ${
          isSearchDrawerOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "64px" }}
      >
        <NavbarSearch></NavbarSearch>
      </div> */}

      {/* mobile menu test */}
      <div
        className={`flex justify-center absolute bottom-0 left-0 w-full bg-[#F9FAFB] h-[90vh]
     text-black z-40 transition-transform duration-500 ease-in-out transform ${
       isSearchDrawerOpen ? "translate-y-0" : "translate-y-full"
     }`}
      >
        <AccordionMenu />
        {/* <NavbarSearch /> */}
      </div>
    </div>
  );
};

export default Navbar;
