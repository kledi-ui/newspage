export interface NavItem {
  id: number;
  navTitle: string;
  icon: JSX.Element;
  children: any;
}

const navConfig: Array<NavItem> = [
  {
    id: 1,
    navTitle: "Category",
    icon: <i className="fas fa-sort-down"></i>,
    children: [
      {
        subTitle: "Fashion",
      },
      {
        subTitle: "Mode",
      },
      {
        subTitle: "VIP",
      },
    ],
  },
  {
    id: 2,
    navTitle: "Contact",
    icon: <i className="fas fa-sort-down"></i>,
    children: [
      {
        subTitle: "Phone",
      },
      {
        subTitle: "Twitter",
      },
      {
        subTitle: "Facebook",
      },
    ],
  },
  {
    id: 3,
    navTitle: "Press",
    icon: <i className="fas fa-sort-down"></i>,
    children: [
      {
        subTitle: "Media",
      },
      {
        subTitle: "TV",
      },
      {
        subTitle: "Instagram",
      },
    ],
  },
];

export default navConfig;
