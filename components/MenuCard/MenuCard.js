import React from "react";

const MenuCard = ({ menuList }) => {
  const ConsumerInsights = [
    {
      title: "Overview",
      path: "/",
    },
    {
      title: "Consumer Journey",
      path: "/",
    },
    {
      title: "Consumer Trends",
      path: "/",
    },
  ];

  return (
    <div className="bg-white shadow-md p-5 rounded-md border border-gray-300 w-72">
      {/* Title Section */}
      <h3 className="text-xl font-semibold flex items-center pb-3 border-b border-gray-300">
        <span className="mr-2">🔍</span> {menuList?.title}
      </h3>

      {/* Menu List */}
      <ul className="mt-3">
        {ConsumerInsights?.map((item, i) => {
          return (
            <li
              key={i}
              className="flex justify-between items-center border-b border-gray-200 
                   hover:text-gray-600 hover:bg-[#F9FAFB] cursor-pointer 
                   p-3 transition-all duration-300 ease-in-out"
            >
              <span>{item?.title}</span>
              <span>&gt;</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuCard;
