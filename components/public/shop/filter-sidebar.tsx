import FilterByAvailability from "@/components/public/shop/filter-by-availability";
import FilterByFormat from "@/components/public/shop/filter-by-format";
import FilterByGenre from "@/components/public/shop/filter-by-genre";
import FilterByPage from "@/components/public/shop/filter-by-page";
import FilterByPrice from "@/components/public/shop/filter-by-price";
import FilterClearAllButton from "@/components/public/shop/filter-clear-all-button";
import { Suspense } from "react";

export default function FilterSidebar() {
  return (
    <aside className="space-y-4">
      <Suspense>
        <section className="h-9 flex-center justify-end-safe">
          <FilterClearAllButton />
        </section>

        <section className="divide-y divide-accent/50 *:py-4 shadow-xs shadow-foreground rounded-md px-4">
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
