import React from "react";
import navConfig, { NavItem } from "../config";

interface IProps {
  activeTab: any;
  handleActiveTab: any;
}
const MainNavigation = ({ activeTab, handleActiveTab }: IProps) => {
  return (
    <nav className="news-navbar">
      <div className="news-navbar-wrapper">
        <h1 className="news-navbar-logo">NewsPaper.</h1>
        <ul>
          {navConfig.map((navItem: NavItem) => (
            <li
              className={
                activeTab?.id === navItem.id
                  ? "news-navbar-links active-tab"
                  : "news-navbar-links"
              }
              onClick={() => handleActiveTab(navItem)}
            >
              {navItem.navTitle} {navItem.icon}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
