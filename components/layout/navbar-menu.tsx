"use client";

import { navbarMenu } from "@/data/common";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <menu className="flex-center">
      {navbarMenu.map(({ name, href, children }) => (
        <li
          key={href}
          className="relative hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 duration-300 rounded-md"
        >
          {isActive(href) ? (
            <button className="size-full flex-1 px-4 py-1.5 flex-center gap-1 bg-accent rounded-md">
              <div>{name}</div>
              {children && <ChevronDownIcon className="size-4" />}
            </button>
          ) : (
            <Link
              href={href}
              className="size-full flex-1 px-4 py-1.5 flex-center gap-1"
            >
              <div>{name}</div>
              {children && <ChevronDownIcon className="size-4" />}
            </Link>
          )}
        </li>
      ))}
    </menu>
  );
}
