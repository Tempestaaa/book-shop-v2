import SearchGrid from "@/components/public/search/search-grid";
import SearchHeader from "@/components/public/search/search-header";
import SearchRelated from "@/components/public/search/search-related";
import { Separator } from "@/components/ui/separator";

type Props = {
  searchParams: Promise<{ query?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { query } = await searchParams;

  return (
    <article className="grid grid-cols-12 gap-8">
      <section className="col-span-9 space-y-4">
        <SearchHeader query={query} />
        <Separator />
        <SearchGrid />
      </section>

      <section className="col-span-3 space-y-4">
        <SearchRelated />
      </section>
    </article>
  );
}
