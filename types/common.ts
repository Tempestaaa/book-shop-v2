import { LucideIcon } from "lucide-react";

export interface Options {
  label: string;
  [k: string]: string;
}

export type OptionsWithIcon = Options & {
  icon: LucideIcon;
};

export type Menu = Options & {
  children?: Options;
};

export type FilterByPage = {
  label: string;
  min: number;
  max: number;
};
