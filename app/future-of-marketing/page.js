import SecendaryMenu from "@/components/SecendaryMenu/SecendaryMenu";
import React from "react";

const Page = () => {
  const menuItems = {
    title: "Future of Marketing",
    items: [
      {
        title: "Overview",
        path: "/future-of-marketing",
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
      <h1>future-of-marketing</h1>
    </div>
  );
};

export default Page;
