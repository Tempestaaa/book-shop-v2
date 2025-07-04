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

export default function NotificationButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <BellIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-xl">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <section className="flex flex-col gap-4">
          <ScrollArea className="h-80">
            {[...Array(4)].map((_, id) => (
              <DropdownMenuItem
                key={id}
                className="*:!p-0 p-2 items-start group"
              >
                <div className="size-12 bg-muted rounded-md group-hover:bg-background duration-300" />
                <div className="space-y-1 flex-1">
                  <p className="font-medium">Notification name</p>
                  <p className="text-xs line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam consequatur soluta, ea necessitatibus ratione esse
                    minima neque quibusdam ad consectetur.
                  </p>
                </div>
              </DropdownMenuItem>
            ))}

            <ScrollBar />
          </ScrollArea>

          <Button variant="ghost">More</Button>
        </section>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
