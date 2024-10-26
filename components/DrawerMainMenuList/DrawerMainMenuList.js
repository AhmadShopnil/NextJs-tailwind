import React from "react";
import MenuCard from "../MenuCard/MenuCard";
import { icon } from "@fortawesome/fontawesome-svg-core";

const DrawerMainMenuList = ({ setIsDrawerOpen }) => {
  const MenuList = [
    {
      title: "Consumer Insights",
      icon: "/icons/icon-consumer-insights.svg",
      nestedMenuItems: [
        {
          title: "Overview",
          path: "/consumer-insights",
        },
        {
          title: "Consumer Journey",
          path: "/consumer-journey",
        },
        {
          title: "Consumer Trends",
          path: "/consumer-trends",
        },
      ],
    },
    {
      title: "Marketing Strategies",
      icon: "/icons/icon-marketing-strategies.svg",
      nestedMenuItems: [
        {
          title: "Overview",
          path: "/marketing-strategies",
        },
        {
          title: "AI",
          path: "/ai",
        },
        {
          title: "App & Mobile",
          path: "/app-mobile",
        },
        {
          title: "Data & Measurement",
          path: "/data-measurement",
        },
        {
          title: "Industries",
          path: "/industries",
        },
        {
          title: "Search",
          path: "/search",
        },
        {
          title: "YouTube",
          path: "/youtube",
        },
      ],
    },
    {
      title: "Future of Marketing",
      icon: "/icons/icon-future-of-marketing.svg",

      nestedMenuItems: [
        {
          title: "Overview",
          path: "/future-of-marketing",
        },
        {
          title: "Creativity",
          path: "/creativity",
        },
        {
          title: "Digital Transformation",
          path: "/digital-transformation",
        },
        {
          title: "Diversity & Inclusion",
          path: "/diversity-inclusion",
        },
        {
          title: "Management & Culture",
          path: "/management-culture",
        },
        {
          title: "Privacy & Trust",
          path: "/privacy-trust",
        },
      ],
    },
    {
      title: "Tools",
      icon: "/icons/icon-tools.svg",
      nestedMenuItems: [
        {
          title: "Overview",
          path: "/tools-overview",
        },
        {
          title: "Insights Finder",
          path: "/insights-finder",
        },
        {
          title: "Google Trends",
          path: "/google-trends",
        },
        {
          title: "Market Finder",
          path: "/market-finder",
        },
      ],
    },
  ];

  return (
    <div
      className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4
      gap-6 pt-20 px-10 bg-[#F9FAFB] overflow-hidden h-screen"
    >
      {MenuList?.map((item, i) => (
        <div key={i}>
          <MenuCard
            menuList={item}
            setIsDrawerOpen={setIsDrawerOpen}
          ></MenuCard>
        </div>
      ))}
    </div>
  );
};

export default DrawerMainMenuList;
