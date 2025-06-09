"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { setTheme, themes, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-8">
          Current theme: <span className="capitalize">{theme}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52">
        <DropdownMenuRadioGroup value={theme}>
          {themes.map((item) => (
            <DropdownMenuRadioItem
              key={item}
              value={item}
              onClick={() => setTheme(item)}
              className="capitalize"
            >
              {item}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
