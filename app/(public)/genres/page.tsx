import { Button } from "@/components/ui/button";
import bookGenres from "@/data/genres";
import { formatSearchParams } from "@/lib/utils";
import Link from "next/link";

export default function GenresPage() {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4">
      {bookGenres
        .toSorted((a, b) => (a.name > b.name ? 1 : -1))
        .map(({ id, name }) => (
          <Button
            key={id}
            variant="outline"
            className="col-span-3 pt-10 pb-20 hover:!bg-foreground hover:!text-background items-end justify-start"
            asChild
          >
            <Link
              href={`/shop?genre=${formatSearchParams(name)}`}
              className="text-xl !font-bold"
            >
              {name}
            </Link>
          </Button>
        ))}
    </div>
  );
}
