import NotificationItem from "@/components/user/notification/notification-item";
import NotificationTabs from "@/components/user/notification/notification-tabs";

export default function NotificationList() {
  return (
    <section className="space-y-2">
      <div className="flex-center gap-4 justify-between">
        <header className="text-subheading">Notifications</header>
        <NotificationTabs />
      </div>

      <ul className="space-y-4">
        {[...Array(2)].map((_, id) => (
          <NotificationItem key={id} />
        ))}
      </ul>
    </section>
  );
}
