// Lucide Icon
import {
  GithubIcon,
  HomeIcon,
  InstagramIcon,
  LinkedinIcon,
  StickyNoteIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

//Types
import { Page, Project, Social } from "./types";

export const pages: Page[] = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: StickyNoteIcon,
  },
];

export const socials: Social[] = [
  {
    name: "Github",
    href: "https://github.com/csametsahin",
    icon: GithubIcon,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/csametsahin/",
    icon: LinkedinIcon,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@sametsahin6193",
    icon: YoutubeIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/csametsahin",
    icon: TwitterIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/csametsahin",
    icon: InstagramIcon,
  },
];

export const projects: Project[] = [
  {
    repo: "csametsahin",
    herf: "https://github.com/csametsahin/csametsahindev",
    description: "csametsahindevcom",
    name: "csametsahin-dev",
  },
  {
    repo: "csametsahin",
    herf: "https://github.com/csametsahin/twitch-clone",
    description: "Twith clone using Nextjs , Tailwind , Prisma , Clerk",
    name: "twitch-clone",
  },
  {
    repo: "csametsahin",
    herf: "https://github.com/csametsahin/ShowRoomBackend",
    description:
      "Backend API with .NET 8 , redis , jwt , autofac , localization implemented",
    name: "backend-api",
  },
];
