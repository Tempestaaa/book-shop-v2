import { formatSearchParams } from "@/lib/utils";
import Link from "next/link";

type Props = {
  name: string;
};

export default function GenreCard({ name }: Props) {
  return (
    <Link
      href={`/shop?genre=${formatSearchParams(name)}`}
      className="h-40 block rounded-md p-4 bg-muted text-subheading hover:bg-foreground hover:text-background duration-300"
    >
      {name}
    </Link>
  );
}
