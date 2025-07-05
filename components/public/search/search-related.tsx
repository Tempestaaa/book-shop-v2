import { Button } from "@/components/ui/button";
import bookGenres from "@/mock-data/genres";
import Link from "next/link";

export default function SearchRelated() {
  return (
    <>
      <header className="text-subheading">Related shelves</header>
      <ul className="flex flex-col gap-1">
        {bookGenres.map((item) => (
          <Link
            key={item.id}
            href={`/shop?genre=${item.name}`}
            className="block text-sm text-muted-foreground hover:text-foreground duration-300 space-x-1"
          >
            <span>{item.name}</span>
            <span>(123,456)</span>
          </Link>
        ))}

        <Button variant="link" className="mt-3" asChild>
          <Link href="/genres">More shelves...</Link>
        </Button>
      </ul>
    </>
  );
}
