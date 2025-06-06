import ShopGrid from "@/components/shop/shop-grid";
import FilterPills from "@/components/shop/filter-pills";
import SortOptions from "@/components/shop/sort-options";

type Props = {
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const searchParamsArray = Object.entries(await searchParams);

  return (
    <div className="space-y-4">
      <section className="flex-center gap-4">
        <div className="flex-1 overflow-hidden">
          <FilterPills searchParamsArray={searchParamsArray} />
        </div>

        <SortOptions />
      </section>

      <section>
        <ShopGrid />
      </section>
    </div>
  );
}
