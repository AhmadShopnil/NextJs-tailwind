import Link from "next/link";
import React from "react";

const SecendaryMenu = ({ menuItems }) => {
  return (
    <nav
      className="flex justify-between
       items-center border-b 
     text-gray-500 font-semibold bg-white 
      "
    >
      <div className="text-xl">
        <h3>{menuItems?.title}</h3>
      </div>
      <div className="flex gap-6  ">
        {menuItems?.items.map((item, i) => (
          <Link
            className="hover:bg-[#F1F3F4] py-5 px-3"
            href={item?.path}
            key={i}
          >
            {item?.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SecendaryMenu;
