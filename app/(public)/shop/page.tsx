import ProductGrid from "@/components/product/product-grid";
import FilterPills from "@/components/shop/filter-pills";
import SortOptions from "@/components/shop/sort-options";
import FilterSidebar from "@/components/shop/filter-sidebar";
import Pagination from "@/components/ui/pagination";
import MyBreadcrumb from "@/components/layout/my-breadcrumb";
import { Options } from "@/types/common";

type Props = {
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const searchParamsArray = Object.entries(await searchParams);

  const breadcrumbs: Options[] = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <article className="col-span-full">
      <MyBreadcrumb breadcrumbs={breadcrumbs} />
      <header className="text-heading mt-8">Shop</header>

      <section className="grid grid-cols-12 gap-8">
        <section className="col-span-3">
          <FilterSidebar />
        </section>

        <section className="col-span-9 space-y-4">
          <section className="flex-center gap-4">
            <div className="flex-1 overflow-hidden">
              <FilterPills searchParamsArray={searchParamsArray} />
            </div>

            <SortOptions />
          </section>

          <section className="space-y-8">
            <ProductGrid />
            <Pagination totalLength={Array(10).length} />
          </section>
        </section>
      </section>
    </article>
  );
}
