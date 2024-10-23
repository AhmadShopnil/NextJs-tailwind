import SecendaryMenu from "@/components/SecendaryMenu/SecendaryMenu";
import React from "react";

const Page = () => {
  const menuItems = {
    title: "Marketing Strategies",
    items: [
      {
        title: "Overview",
        path: "/marketing-strategies",
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
      <h1>marketing strategies</h1>
    </div>
  );
};

export default Page;
