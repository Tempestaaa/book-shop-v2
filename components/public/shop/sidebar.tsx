import FilterByFormat from "@/components/public/shop/filter-by-format";
import FilterByGenre from "@/components/public/shop/filter-by-genre";
import FilterByPage from "@/components/public/shop/filter-by-page";
import FilterByPrice from "@/components/public/shop/filter-by-price";
import FilterClearAll from "@/components/public/shop/filter-clear-all";

export default function Sidebar() {
  return (
    <article>
      <FilterClearAll />

      <section className="divide-y-2 *:py-4">
        <FilterByGenre />
        <FilterByPrice />
        <FilterByPage />
        <FilterByFormat />
      </section>
    </article>
  );
}
