"use client";

import { navbarUserMenu } from "@/data/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <ul className="">
      {navbarUserMenu.map(({ href, icon, name }) => {
        const Icon = icon;
        return (
          <li key={href}>
            <Link
              href={href}
              className={`flex-center gap-4 py-2 px-4 hover:bg-accent hover:text-accent-foreground duration-300 rounded-md ${
                isActive(href) && "!bg-foreground !text-background"
              }`}
            >
              <Icon className="size-4" />
              <div className="">{name}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
