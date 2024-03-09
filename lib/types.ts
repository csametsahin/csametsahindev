import { LucideIcon } from "lucide-react";

export type Page = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export type Social = {
  name: string;
  href: string;
  icon: LucideIcon;
};

export type Project = {
  image?: string;
  repo: string;
  name: string;
  description: string;
  herf: string;
};
