import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-140 p-4 flex gap-8 *:flex-1 shadow-xs shadow-foreground rounded-md">
      <div className="flex-center flex-col justify-center-safe gap-4">
        <header className="uppercase text-7xl text-center leading-normal font-logo tracking-wide">
          Discover your next <br />
          adventure
        </header>

        <Button size="lg">Explore now</Button>
      </div>
    </section>
  );
}
