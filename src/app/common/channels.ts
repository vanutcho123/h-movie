// Trong file channels.ts
import { IChannels } from "../interfaces";

export const channels: IChannels[] = [
  {
    title: "Library",
    icon: "home",
    routerLink: "library",
    isActive: true
  },
  {
    title: "History",
    icon: "home",
    routerLink: "history",
    isActive: false
  },
  {
    title: "Your Videos",
    icon: "home",
    routerLink: "yourVideos",
    isActive: false
  },
  {
    title: "Watch Later",
    icon: "home",
    routerLink: "watchLater",
    isActive: false
  },
  {
    title: "Downloads",
    icon: "home",
    routerLink: "downloads",
    isActive: false
  },
];
