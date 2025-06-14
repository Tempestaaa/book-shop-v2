import NotificationCard from "@/components/layout/notification-card";
import Pagination from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Suspense } from "react";

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="unseen">
        <section className="space-y-2 flex-center gap-4 justify-between">
          <header className="text-heading">Notifications</header>
          <TabsList>
            <TabsTrigger value="unseen">Unseen</TabsTrigger>
            <TabsTrigger value="read">Read</TabsTrigger>
          </TabsList>
        </section>

        <Suspense fallback="Loading...">
          <section className="">
            <TabsContent value="unseen" className="space-y-8">
              <div className="*:p-4">
                {[...Array(10)].map((_, id) => (
                  <NotificationCard key={id} />
                ))}
              </div>
              <Pagination totalLength={Array(10).length} />
            </TabsContent>

            <TabsContent value="read" className="space-y-8">
              <div className="*:p-4">
                {[...Array(10)].map((_, id) => (
                  <NotificationCard key={id} isRead />
                ))}
              </div>
              <Pagination totalLength={Array(10).length} />
            </TabsContent>
          </section>
        </Suspense>
      </Tabs>
    </div>
  );
}
