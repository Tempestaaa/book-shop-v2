import Hero from "@/components/public/home/hero";
import NewsLetter from "@/components/public/home/news-letter";
import ProductDisplay from "@/components/public/home/product-display";
import ValueProposition from "@/components/public/home/value-proposition";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <Hero />
        <ValueProposition />

        <ProductDisplay
          label="New Arrivals"
          href="/shop"
          buttonLabel="View all"
          lightMode
        />

        <ProductDisplay
          label="Bestsellers"
          href="/shop"
          buttonLabel="View all"
        />

        <NewsLetter />
      </main>
    </div>
  );
}
