import Navbar from "@/components/public/navbar";
import Sidebar from "@/components/user/sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div className="py-16 grid grid-cols-12 gap-8">
        <aside className="col-span-3">
          <Sidebar />
        </aside>

        <div className="col-span-9">{children}</div>
      </div>
    </>
  );
}
