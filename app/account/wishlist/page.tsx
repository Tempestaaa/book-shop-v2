import ProductGrid from "@/components/product/product-grid";
import SortOptions from "@/components/shop/sort-options";
import { Input } from "@/components/ui/input";
import Pagination from "@/components/ui/pagination";
import { Suspense } from "react";

export default function WishListPage() {
  return (
    <div className="space-y-4">
      <header className="text-4xl font-bold">Wishlist</header>

      <section className="flex-center gap-4 justify-between">
        <Input
          placeholder="Search"
          className="w-54 focus:w-72 transition-[width] duration-300"
        />

        <Suspense fallback="Loading...">
          <SortOptions />
        </Suspense>
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
