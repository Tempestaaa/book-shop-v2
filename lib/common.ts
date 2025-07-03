import { FilterByPage, Item } from "@/types/common";

export const navbarMenu: Item[] = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Genres",
    children: [],
  },
  {
    label: "About",
    href: "/about",
  },
];

export const pageRanges: FilterByPage[] = [
  { label: "Under 100 pages", min: 0, max: 99 },
  { label: "100 - 300 pages", min: 100, max: 300 },
  { label: "301 - 500 pages", min: 301, max: 500 },
  { label: "501 - 1000 pages", min: 501, max: 1000 },
  { label: "Over 1000 pages", min: 1001, max: Number.MAX_SAFE_INTEGER },
];

export const filterTheseArray = ["genre", "price", "pages", "format"];

export const userNavbarMenu: Item[] = [
  {
    label: "Account",
    children: [
      {
        label: "Profile",
        href: "/user/account/profile",
      },
      {
        label: "Address",
        href: "/user/account/address",
      },
      {
        label: "Payment",
        href: "/user/account/payment",
      },
      {
        label: "Change password",
        href: "/user/account/change-password",
      },
    ],
  },
  {
    label: "Notifications",
    children: [
      {
        label: "Order",
        href: "/user/notification/order",
      },
      {
        label: "Promotion",
        href: "/user/notification/promotion",
      },
    ],
  },
  {
    label: "Purchase",
    href: "/user/purchase",
  },
  {
    label: "Settings",
    href: "/user/settings",
  },
];
