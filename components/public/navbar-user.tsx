import { auth } from "@/auth";
import LogoutButton from "@/components/public/logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userNavbarMenu } from "@/lib/common";
import Link from "next/link";

export default async function NavbarUser() {
  const session = await auth();

  return (
    <div className="flex-center gap-4">
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-3xs">
            <DropdownMenuLabel>Username</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <>
              {userNavbarMenu.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <DropdownMenuItem>
                      <Link href={item.href} className="size-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ) : (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        {item.label}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="w-52">
                          {item.children?.map((sub) => (
                            <DropdownMenuItem key={sub.href}>
                              <Link href={sub.href} className="w-full">
                                {sub.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  )}
                </div>
              ))}
            </>

            <DropdownMenuSeparator />
            <LogoutButton />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
      )}
    </div>
  );
}
