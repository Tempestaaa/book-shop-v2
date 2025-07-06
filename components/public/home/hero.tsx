import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-[500px] sm:h-[600px] flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
        Unlock New Worlds with Every Page
      </h1>

      <p className="text-xl max-w-2xl mb-4">
        Discover your next favorite story, explore new ideas, and find
        inspiration in our curated collection of books.
      </p>

      <Button className="!h-12 px-10 rounded-full text-lg" asChild>
        <Link href="/shop">Explore Books Now</Link>
      </Button>
    </section>
  );
}
