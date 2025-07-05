import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  genre: string;
};

export default function GenreItem({ genre }: Props) {
  return (
    <Button variant="outline" asChild className="!h-20">
      <Link
        href={`/shop?genre=${genre}`}
        className="flex justify-end-safe items-end-safe text-xl"
      >
        {genre}
      </Link>
    </Button>
  );
}
