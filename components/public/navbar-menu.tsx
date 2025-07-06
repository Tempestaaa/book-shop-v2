import { Button } from "@/components/ui/button";
import { navbarMenu } from "@/lib/common";
import { slugify } from "@/lib/utils";
import bookGenres from "@/mock-data/genres";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function NavbarMenu() {
  const menuItemClassName =
    "px-4 py-2 hover:bg-accent duration-300 rounded-md flex-center gap-2 group";

  return (
    <menu className="flex-center">
      {navbarMenu.map((item, id) => (
        <li key={id} className="relative group">
          <Link href={item.href!} className={menuItemClassName}>
            <p>{item.label}</p>
            {item.children && (
              <ChevronDownIcon className="size-4 group-hover:rotate-180 duration-300" />
            )}
          </Link>

          {item.children && (
            <ul className="absolute top-full left-0 z-50 bg-background hidden group-hover:grid grid-cols-4 gap-2 min-w-xl p-2 rounded-md shadow-xs shadow-foreground">
              {bookGenres.map((item) => (
                <Button key={item.id} variant="ghost" asChild className="!px-8">
                  <Link href={`/shop?genre=${slugify(item.name)}`}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </ul>
          )}
        </li>
      ))}
    </menu>
  );
}
