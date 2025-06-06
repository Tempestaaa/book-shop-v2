import FilterSidebar from "@/components/shop/filter-sidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <FilterSidebar />
      </div>

      <div className="col-span-9">{children}</div>
    </div>
  );
}
