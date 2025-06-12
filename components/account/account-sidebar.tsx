"use client";

import { navbarUserMenu } from "@/data/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => href === pathname;

  return (
    <ul className="p-4 shadow-xs shadow-foreground rounded-md">
      {navbarUserMenu.map(({ href, icon, label }) => {
        const Icon = icon;
        return (
          <li key={href}>
            <Link
              href={href as string}
              className={`flex-center gap-4 py-2 px-4 hover:bg-accent hover:text-accent-foreground duration-300 rounded-md border-l-3 border-transparent ${
                isActive(href as string) && "!border-foreground rounded-l-none"
              }`}
            >
              <Icon className="size-4" />
              <div className="">{label}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
