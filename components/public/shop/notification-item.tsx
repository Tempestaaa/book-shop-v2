import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function NotificationItem() {
  return (
    <DropdownMenuItem className="*:!p-0 p-2 items-start group">
      <div className="size-12 bg-muted rounded-md group-hover:bg-background duration-300" />
      <div className="space-y-1 flex-1">
        <p className="font-medium">Notification name</p>
        <p className="text-xs line-clamp-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          consequatur soluta, ea necessitatibus ratione esse minima neque
          quibusdam ad consectetur.
        </p>
      </div>
    </DropdownMenuItem>
  );
}
