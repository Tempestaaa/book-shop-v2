import { FilterByPage, Menu } from "@/types/common";
import {
  CalendarArrowDownIcon,
  CalendarArrowUpIcon,
  ChevronsDownIcon,
  ChevronsUpIcon,
  HeartIcon,
  LogsIcon,
  LucideIcon,
  SettingsIcon,
  User2Icon,
} from "lucide-react";

export const navbarMenu: Menu[] = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Genres",
    href: "/genres",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const navbarUserMenu: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    label: "My account",
    icon: User2Icon,
    href: "/account/profile",
  },
  {
    label: "My orders",
    icon: LogsIcon,
    href: "/account/orders",
  },
  {
    label: "Wishlist",
    icon: HeartIcon,
    href: "/account/wishlist",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/account/settings",
  },
];

export const pageRanges: FilterByPage[] = [
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

export const dateSort: { label: string; href: string; icon: LucideIcon }[] = [
  {
    label: "Latest",
    href: "desc",
    icon: CalendarArrowDownIcon,
  },
  {
    label: "Oldest",
    href: "asc",
    icon: CalendarArrowUpIcon,
  },
];

export const ratingSort: { label: string; href: string; icon: LucideIcon }[] = [
  {
    label: "High to Low",
    href: "asc",
    icon: ChevronsDownIcon,
  },
  {
    label: "Low to High",
    href: "desc",
    icon: ChevronsUpIcon,
  },
];
