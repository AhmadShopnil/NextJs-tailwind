// components/AccordionMenu.js

import Link from "next/link";
import { useState } from "react";

const AccordionMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const MenuList = [
    {
      title: "Consumer Insights",
      icon: "/icons/icon-consumer-insights.svg",
      nestedMenuItems: [
        { title: "Overview", path: "/consumer-insights" },
        { title: "Consumer Journey", path: "/consumer-journey" },
        { title: "Consumer Trends", path: "/consumer-trends" },
      ],
    },
    {
      title: "Marketing Strategies",
      icon: "/icons/icon-marketing-strategies.svg",
      nestedMenuItems: [
        { title: "Overview", path: "/marketing-strategies" },
        { title: "AI", path: "/ai" },
        { title: "App & Mobile", path: "/app-mobile" },
        { title: "Data & Measurement", path: "/data-measurement" },
        { title: "Industries", path: "/industries" },
        { title: "Search", path: "/search" },
        { title: "YouTube", path: "/youtube" },
      ],
    },
    {
      title: "Future of Marketing",
      icon: "/icons/icon-future-of-marketing.svg",
      nestedMenuItems: [
        { title: "Overview", path: "/future-of-marketing" },
        { title: "Creativity", path: "/creativity" },
        { title: "Digital Transformation", path: "/digital-transformation" },
        { title: "Diversity & Inclusion", path: "/diversity-inclusion" },
        { title: "Management & Culture", path: "/management-culture" },
        { title: "Privacy & Trust", path: "/privacy-trust" },
      ],
    },
    {
      title: "Tools",
      icon: "/icons/icon-tools.svg",
      nestedMenuItems: [
        { title: "Overview", path: "/tools-overview" },
        { title: "Insights Finder", path: "/insights-finder" },
        { title: "Google Trends", path: "/google-trends" },
        { title: "Market Finder", path: "/market-finder" },
      ],
    },
  ];

  return (
    <div className="space-y-4 w-full mx-auto bg-white text-gray-600 border">
      <div className="w-full flex justify-between border-b text-xl p-4 ">
        <div></div>
        <h3 className="text-center">Think with Google</h3>
        <button>x</button>
      </div>

      <div className="px-4 grid grid-cols-1 gap-4">
        {MenuList.map((menus, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            {/* Menu Title and button for open menu */}
            <button
              className="w-full flex justify-between items-center py-6 px-4 text-black text-lg"
              onClick={() => toggleAccordion(index)}
            >
              <span>{menus.title}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Nested Menu List with transition */}
            <div
              className={`px-4 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-[500px] py-2" : "max-h-0"
              }`}
            >
              {menus.nestedMenuItems.map((item, i) => (
                <Link className="border-t py-4 block" href={item.path} key={i}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionMenu;
