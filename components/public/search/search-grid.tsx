import ProductCard from "@/components/public/product/product-card";

export default function SearchGrid() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
      {[...Array(4)].map((_, id) => (
        <ProductCard key={id} />
      ))}
    </ul>
  );
}
