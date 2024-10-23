import Link from "next/link";
import React from "react";

const MenuCard = ({ menuList, setIsDrawerOpen }) => {
  return (
    <div className="bg-white shadow-md px-5 pt-6 rounded-md border border-gray-300 w-72">
      {/* Title Section */}
      <h3 className="text-xl font-semibold flex items-center pb-3 border-b border-gray-300">
        <span className="mr-2">🔍</span> {menuList?.title}
      </h3>

      {/* Menu List */}
      <ul className=" ">
        {menuList?.nestedMenuItems?.map((item, i) => {
          return (
            <Link
              onClick={() => setIsDrawerOpen(false)}
              key={i}
              href={item?.path}
              className="flex justify-between items-center border-t py-4 border-gray-200 
                   hover:text-gray-600 hover:bg-[#F9FAFB] cursor-pointer 
                   p-3 transition-all duration-400 ease-in-out"
            >
              <span>{item?.title}</span>
              <span>&gt;</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuCard;
