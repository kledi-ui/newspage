import React from "react";

interface IProps {
  activeTab: any;
}

const ExtraNavigation = ({ activeTab }: IProps) => {
  return (
    <nav className="news-navbar-extra">
      <div className="news-navbar-extra-wrapper">
        <ul>
          {activeTab?.children.map((tab: any) => (
            <li className="news-navbar-links">{tab.subTitle}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ExtraNavigation;
