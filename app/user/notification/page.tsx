import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import NotificationList from "@/components/user/notification/notification-list";

export default function NotificationPage() {
  return (
    <article className="space-y-4">
      <section className="flex-center justify-end-safe">
        <Button variant="ghost">Mark as read all</Button>
      </section>

      <Separator />

      <NotificationList />
    </article>
  );
}
