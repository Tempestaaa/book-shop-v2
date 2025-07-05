import GenreGrid from "@/components/public/genres/genre-grid";

export default function GenresPage() {
  return (
    <article className="space-y-4">
      <header className="text-heading">All genres</header>
      <GenreGrid />
    </article>
  );
}
