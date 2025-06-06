import ProductCard from "@/components/product/product-card";
import React from "react";

export default function ShopGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-8">
      {[...Array(12)].map((_, id) => (
        <ProductCard key={id} />
      ))}
    </div>
  );
}
