import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navbarUserMenu } from "@/data/common";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

export default function NavbarUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="flex-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex flex-col justify-between">
            <div className="line-clamp-1">Username</div>
            <div className="text-xs font-light text-muted-foreground line-clamp-1">
              username.email@xyz.com
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <menu>
          {navbarUserMenu.map(({ name, href, icon }) => {
            const Icon = icon;
            return (
              <DropdownMenuItem key={href} asChild>
                <Link
                  href={href}
                  className="flex-center gap-5 py-2 px-4 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 duration-200 rounded"
                >
                  <Icon className="size-3.5" />
                  <div className="text-sm">{name}</div>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </menu>

        <DropdownMenuSeparator />

        <Button variant="ghost" className="w-full hover:!bg-destructive">
          <LogOutIcon />
          <div className="">Logout</div>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
