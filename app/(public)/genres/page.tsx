import MyBreadcrumb from "@/components/layout/my-breadcrumb";
import GenreCard from "@/components/public/home/genre-card";
import { Button } from "@/components/ui/button";
import bookGenres from "@/data/genres";
import { formatSearchParams } from "@/lib/utils";
import { Options } from "@/types/common";
import Link from "next/link";

export default function GenresPage() {
  const breadcrumbs: Options[] = [
    { label: "Home", href: "/" },
    { label: "Genres", href: "/genres" },
  ];

  return (
    <article className="col-span-12 space-y-8">
      <MyBreadcrumb breadcrumbs={breadcrumbs} />

      <section className="grid grid-cols-12 gap-4">
        {bookGenres
          .toSorted((a, b) => (a.name > b.name ? 1 : -1))
          .map(({ id, name }) => (
            <div key={id} className="col-span-3">
              <GenreCard name={name} />
            </div>
          ))}
      </section>
    </article>
  );
}
