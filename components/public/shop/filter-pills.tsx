import FilterClearButton from "@/components/public/shop/filter-clear-button";
import { Badge } from "@/components/ui/badge";
import { filterTheseArray } from "@/lib/common";
import { unslugify } from "@/lib/utils";

type Props = {
  query: [string, string | undefined][];
};

export default function FilterPills({ query }: Props) {
  const onlyFilters = query.filter((item) =>
    filterTheseArray.includes(item[0])
  );

  return (
    <section className="max-w-max h-10 flex-center">
      <ul className="flex gap-2">
        {onlyFilters.map(([key, value]) => (
          <Badge key={key} className="font-normal flex-center gap-0.5">
            <span className="capitalize">{key}</span>
            <span className="mr-0.5">:</span>
            <span className="capitalize">{unslugify(value!)}</span>

            <div className="ml-1.5">
              <FilterClearButton term={key} isUsingIcon />
            </div>
          </Badge>
        ))}
      </ul>
    </section>
  );
}
