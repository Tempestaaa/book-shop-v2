import ProductCard from "@/components/public/product/product-card";

export default function ShopContent() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-8">
      {[...Array(12)].map((_, id) => (
        <ProductCard key={id} />
      ))}
    </div>
  );
}
