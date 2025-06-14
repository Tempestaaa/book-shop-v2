import NotificationCard from "@/components/layout/notification-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
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

      <DropdownMenuContent align="end" side="bottom" className="w-xs">
        <DropdownMenuLabel className="flex-center gap-4 justify-between">
          <div className="">Notifications</div>
          <Badge>9</Badge>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <ScrollArea className="space-y-1 h-70 peer-checked:h-120 pr-4 transition-[height] duration-300">
          {[...Array(9)].map((_, id) => (
            <NotificationCard key={id} />
          ))}

          <ScrollBar />
        </ScrollArea>

        <DropdownMenuSeparator className="peer-checked:hidden" />

        <Button variant="ghost" className="w-full" asChild>
          <Link href="/account/notifications">More</Link>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
