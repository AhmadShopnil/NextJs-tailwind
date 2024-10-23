import React from "react";
import MenuCard from "../MenuCard/MenuCard";

const MainMenuList = () => {
  const MenuList = [
    {
      title: "Consumer Insights",
    },
    {
      title: "Marketing Strategies",
    },
    {
      title: "Future of Marketing",
    },
    {
      title: "Tools",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-24 px-10 ">
      {MenuList?.map((item, i) => (
        <MenuCard key={i} menuList={item}></MenuCard>
      ))}
    </div>
  );
};

export default MainMenuList;
