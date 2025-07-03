export type Item = {
  label: string;
  href?: string;
  value?: string;
  children?: { label: string; href: string }[];
};
export type FilterByPage = {
  label: string;
  min: number;
  max: number;
};
