import { unslugify } from "@/lib/utils";

type Props = {
  query?: string;
};

export default function SearchHeader({ query }: Props) {
  return (
    <header className="text-heading">
      {query ? unslugify(query) : "No search query at the moment"}
    </header>
  );
}
