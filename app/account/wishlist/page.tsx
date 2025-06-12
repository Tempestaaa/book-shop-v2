import ProductGrid from "@/components/product/product-grid";
import SortOptions from "@/components/shop/sort-options";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
import { Suspense } from "react";

export default function WishListPage() {
  return (
    <div className="space-y-8">
      <section className="flex-center gap-4 justify-between">
        <header className="text-heading">Wishlist</header>

        <div className="flex-center gap-2">
          <Input
            placeholder="Search"
            className="w-54 focus:w-72 transition-[width] duration-300"
          />

          <Suspense fallback="Loading...">
            <SortOptions />
          </Suspense>
        </div>
      </section>

      <section className="space-y-8">
        <ProductGrid />

        <Suspense fallback="Loading...">
          <Pagination totalLength={Array(10).length} />
        </Suspense>
      </section>
    </div>
  );
}
