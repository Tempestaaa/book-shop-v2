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

        <ScrollArea className="space-y-1 h-80 pr-4">
          {[...Array(9)].map((_, id) => (
            <NotificationCard key={id} />
          ))}

          <ScrollBar />
        </ScrollArea>

        <DropdownMenuSeparator />

        <Button variant="ghost" className="w-full">
          More
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
