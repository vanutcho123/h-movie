// Trong file sidebar.ts
import { ISidebars } from "../interfaces";

export const sidebars: ISidebars[] = [
  {
    title: "Home",
    icon: "home",
    routerLink: "home",
    isActive: true
  },
  {
    title: "Shorts",
    icon: "home",
    routerLink: "shorts",
    isActive: false
  },
  {
    title: "Subscriptions",
    icon: "home",
    routerLink: "subscriptions",
    isActive: false
  },
  {
    title: "hMusic",
    icon: "home",
    routerLink: "hMusic",
    isActive: false
  }
];
