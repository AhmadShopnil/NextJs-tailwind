import SecendaryMenu from "@/components/SecendaryMenu/SecendaryMenu";
import React from "react";

const Page = () => {
  const menuItems = {
    title: "Consumer Insights",
    items: [
      {
        title: "Overview",
        path: "/consumer-insights",
      },
      {
        title: "Consumer Journey",
        path: "/",
      },
      {
        title: "Consumer Trends",
        path: "/",
      },
    ],
  };

  return (
    <div>
      <SecendaryMenu menuItems={menuItems}></SecendaryMenu>
      <h1>consumer</h1>
    </div>
  );
};

export default Page;
