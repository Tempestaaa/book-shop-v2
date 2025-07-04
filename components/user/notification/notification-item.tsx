import { Badge } from "@/components/ui/badge";
import dayjs from "dayjs";

export default function NotificationItem() {
  return (
    <li className="flex-center gap-8 bg-accent text-accent-foreground hover:text-foreground hover:bg-background duration-300 p-4 rounded-md group">
      {/* Todo: Add bank image */}
      <div className="bg-background size-20 rounded-md group-hover:bg-muted" />

      <section className="flex-1 space-y-1">
        <p className="font-medium">Notification name</p>

        <div className="text-sm text-muted-foreground">
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            delectus laborum beatae quae obcaecati. Repellendus id laboriosam
            pariatur consequuntur consequatur!
          </p>

          <p>{dayjs().toString()}</p>
        </div>
      </section>

      <Badge>Unseen</Badge>
    </li>
  );
}
