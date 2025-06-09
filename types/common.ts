import { LucideIcon } from "lucide-react";
import { z } from "zod/v4";

export const Options = z.object({
  name: z.string(),
  href: z.string(),
});

export type OptionsWithIcon = z.infer<typeof Options> & {
  icon: LucideIcon;
};

export const Menu = Options.extend({
  children: Options.optional(),
});

export type MenuWithIcon = z.infer<typeof Menu> & OptionsWithIcon;

export const filterByPage = z.object({
  label: z.string(),
  min: z
    .number()
    .nonnegative("Pages cannot be negative")
    .max(Number.MAX_SAFE_INTEGER, "Pages cannot pass this limit"),
  max: z
    .number()
    .nonnegative("Pages cannot be negative")
    .max(Number.MAX_SAFE_INTEGER, "Pages cannot pass this limit"),
});

export const breadcrumb = z.object({
  label: z.string(),
  href: z.string().optional(),
});
