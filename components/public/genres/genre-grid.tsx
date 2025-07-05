import GenreItem from "@/components/public/genres/genre-item";
import bookGenres from "@/mock-data/genres";

export default function GenreGrid() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-4">
      {bookGenres.map((item) => (
        <GenreItem key={item.id} genre={item.name} />
      ))}
    </ul>
  );
}
