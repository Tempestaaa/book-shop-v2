import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CheckCheckIcon } from "lucide-react";

type Props = {
  isRead?: boolean;
};

export default function NotificationCard({ isRead = false }: Props) {
  return (
    <div className="p-2 rounded-md flex gap-4 hover:bg-accent hover:text-accent-foreground duration-300 cursor-pointer">
      <Avatar className="cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="line-clamp-3 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at
        non pariatur sequi consectetur dolor nostrum! Recusandae dolorem
        veritatis, mollitia temporibus molestias voluptatem maxime! Tempora modi
        sed sit, facilis soluta tempore corrupti nobis sequi totam ab quo, culpa
        voluptate. Odio?
      </div>

      <Button variant="ghost">
        <CheckCheckIcon
          className={`${isRead ? "text-foreground" : "text-muted-foreground"}`}
        />
      </Button>
    </div>
  );
}
