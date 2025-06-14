import GenreList from "@/components/public/home/genre-list";
import Hero from "@/components/public/home/hero";
import ProductCarousel from "@/components/public/home/product-carousel";
import TopSellers from "@/components/public/home/top-sellers";

export default function HomePage() {
  return (
    <article className="space-y-16">
      <Hero />
      <GenreList />
      <ProductCarousel genreName="Fantasy" />
      <ProductCarousel genreName="Manga" />

      <TopSellers />

      <ProductCarousel genreName="Drama" />
      <ProductCarousel genreName="Horror" />
      <ProductCarousel genreName="Romance" />
    </article>
  );
}
