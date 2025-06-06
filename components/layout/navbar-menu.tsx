import { navbarMenu } from "@/data/common";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function NavbarMenu() {
  return (
    <menu className="flex-center">
      {navbarMenu.map(({ name, href, children }) => (
        <li
          key={href}
          className="relative hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 duration-200 rounded"
        >
          <Link
            href={href}
            className="size-full flex-1 px-4 py-1.5 flex-center gap-1"
          >
            <div>{name}</div>
            {children && <ChevronDownIcon className="size-4" />}
          </Link>
        </li>
      ))}
    </menu>
  );
}
