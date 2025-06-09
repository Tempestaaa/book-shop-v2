import { filterByPage, Menu, MenuWithIcon } from "@/types/common";
import { HeartIcon, LogsIcon, SettingsIcon, User2Icon } from "lucide-react";
import { z } from "zod/v4";

export const navbarMenu: z.infer<typeof Menu>[] = [
  {
    name: "Shop",
    href: "/shop",
  },
  {
    name: "Genres",
    href: "/genres",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const navbarUserMenu: MenuWithIcon[] = [
  {
    name: "My account",
    href: "/account/profile",
    icon: User2Icon,
  },
  {
    name: "My orders",
    href: "/account/orders",
    icon: LogsIcon,
  },
  {
    name: "Wishlist",
    href: "/account/wishlist",
    icon: HeartIcon,
  },
  {
    name: "Settings",
    href: "/account/settings",
    icon: SettingsIcon,
  },
];

export const pageRanges: z.infer<typeof filterByPage>[] = [
  { label: "Under 100 pages", min: 0, max: 99 },
  { label: "100 - 300 pages", min: 100, max: 300 },
  { label: "301 - 500 pages", min: 301, max: 500 },
  { label: "501 - 1000 pages", min: 501, max: 1000 },
  { label: "Over 1000 pages", min: 1001, max: Number.MAX_SAFE_INTEGER },
];

export const onlyFilterThese = [
  "genre",
  "price",
  "format",
  "pages",
  "availability",
];
