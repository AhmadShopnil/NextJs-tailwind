import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon you need
import Link from "next/link";
import React from "react";
import Image from "next/image";

const MenuCard = ({ menuList, setIsDrawerOpen }) => {
  return (
    <div className="bg-white shadow-md  pt-6 rounded-md border border-gray-300 w-72">
      {/* Title Section */}
      <h3 className=" px-5 text-xl font-semibold flex items-center pb-3 border-b border-gray-300">
        <span className="mr-2">
          <Image
            src={menuList?.icon}
            alt={`${menuList.title} icon`}
            width={24}
            height={24}
          />
        </span>{" "}
        {menuList?.title}
      </h3>

      {/* Menu List */}
      <ul className="">
        {menuList?.nestedMenuItems?.map((item, i) => {
          return (
            <Link
              onClick={() => setIsDrawerOpen(false)}
              key={i}
              href={item?.path}
              className="flex justify-between items-center 
               ml-4 hover:ml-0 hover:pl-4
               py-4 pr-4  hover:text-gray-600 hover:bg-[#F9FAFB] 
               cursor-pointer transition-all duration-600 ease-in-out group
               border-b   
               "
            >
              <span>{item?.title}</span>
              <span className="transform transition-transform duration-500 group-hover:translate-x-2">
                {/* Icon translates right by 0.5rem (8px) on hover */}
                <FontAwesomeIcon icon={faAngleRight} />
              </span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuCard;
