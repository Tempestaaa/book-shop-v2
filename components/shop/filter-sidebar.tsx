import FilterByAvailability from "@/components/shop/filter-by-availability";
import FilterByFormat from "@/components/shop/filter-by-format";
import FilterByGenre from "@/components/shop/filter-by-genre";
import FilterByPage from "@/components/shop/filter-by-page";
import FilterByPrice from "@/components/shop/filter-by-price";
import FilterClearAllButton from "@/components/shop/filter-clear-all-button";
import { Suspense } from "react";

export default function FilterSidebar() {
  return (
    <aside>
      <Suspense>
        <FilterClearAllButton />
        <section className="divide-y divide-accent/50 *:py-2">
          <FilterByGenre />
          <FilterByPrice />
          <FilterByFormat />
          <FilterByPage />
          <FilterByAvailability />
        </section>
      </Suspense>
    </aside>
  );
}
