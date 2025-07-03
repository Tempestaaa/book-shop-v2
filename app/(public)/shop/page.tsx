import MyBreadcrumb from "@/components/public/my-breadcrumb";
import Pagination from "@/components/public/pagination";
import FilterPills from "@/components/public/shop/filter-pills";
import ShopContent from "@/components/public/shop/shop-content";
import Sidebar from "@/components/public/shop/sidebar";
import { Item } from "@/types/common";

type Props = {
  searchParams: Promise<{ [k: string]: string }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const query = Object.entries(await searchParams);

  const breadcrumbs: Item[] = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <div className="">
      <MyBreadcrumb breadcrumbs={breadcrumbs} />

      <article className="grid grid-cols-12 gap-8">
        <aside className="col-span-3">
          <Sidebar />
        </aside>

        <section className="col-span-9">
          <FilterPills query={query} />

          <section className="space-y-8">
            <ShopContent />
            <Pagination totalLength={Array(10).length} />
          </section>
        </section>
      </article>
    </div>
  );
}
