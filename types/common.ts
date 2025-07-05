import { bookGenre } from "@/types/product";
import { z } from "zod/v4";

export type Item = {
  label: string;
  href?: string;
  value?: string;
  children?: { label: string; href: string }[];
};

export type NavbarMenu = Omit<Item, "children"> & {
  children?: z.infer<typeof bookGenre>[];
};

export type FilterByPage = {
  label: string;
  min: number;
  max: number;
};

export type BreadCrumb = {
  label: string;
  href?: string;
};
