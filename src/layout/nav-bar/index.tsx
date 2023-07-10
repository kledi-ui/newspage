import React, { useState } from "react";
import Header from "./header";
import MainNav from "./main-navigation";
import ExtraNavigation from "./extra-navigation";
import "./index.css";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState<any>(null);

  const handleActiveTab = (navItem: any) => {
    if (activeTab && activeTab.id === navItem.id) {
      return setActiveTab(null);
    }
    return setActiveTab(navItem);
  };

  return (
    <>
      <Header />
      <MainNav activeTab={activeTab} handleActiveTab={handleActiveTab} />
      {activeTab && <ExtraNavigation activeTab={activeTab} />}
    </>
  );
};

export default NavBar;
