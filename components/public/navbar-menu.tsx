import { navbarMenu } from "@/lib/common";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function NavbarMenu() {
  const menuItemClassName =
    "px-4 py-2 hover:bg-accent duration-300 rounded-md flex-center gap-2 group";

  return (
    <menu className="flex-center">
      {navbarMenu.map((item, id) => (
        <li key={id}>
          {item.href ? (
            <Link href={item.href} className={menuItemClassName}>
              {item.label}
            </Link>
          ) : (
            <div className={cn(menuItemClassName, "cursor-default")}>
              <p>{item.label}</p>
              {item.children && (
                <ChevronDownIcon className="size-4 group-hover:rotate-180 duration-300" />
              )}
            </div>
          )}
        </li>
      ))}
    </menu>
  );
}
