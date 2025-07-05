import NotificationItem from "@/components/public/shop/notification-item";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BellIcon } from "lucide-react";
import Link from "next/link";

export default function NotificationButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <BellIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-xs">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <section className="flex flex-col gap-4">
          <ScrollArea className="h-80">
            {[...Array(5)].map((_, id) => (
              <NotificationItem key={id} />
            ))}

            <ScrollBar />
          </ScrollArea>

          <Button variant="ghost" asChild>
            <Link href="/user/notification">More</Link>
          </Button>
        </section>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
