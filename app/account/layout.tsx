import AccountBreadcrumb from "@/components/account/account-breadcrumb";
import AccountSidebar from "@/components/account/account-sidebar";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-8">
      <AccountBreadcrumb />

      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-3">
          <AccountSidebar />
        </aside>

        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
}
