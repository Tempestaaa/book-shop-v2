import FilterDeleteButton from "@/components/shop/filter-delete-button";
import { Badge } from "@/components/ui/badge";

type Props = {
  searchParamsArray: [string, string | undefined][];
};

export default function FilterPills({ searchParamsArray }: Props) {
  return (
    <ul className="max-w-max flex gap-2">
      {searchParamsArray.map(([key, value]) => (
        <Badge key={key} className="text-xs font-normal flex-center gap-0.5">
          <span className="capitalize">{key}</span>
          <span className="mr-0.5">:</span>
          <span className="capitalize">{value}</span>

          <div className="ml-1.5">
            <FilterDeleteButton term={key} isUsingIcon />
          </div>
        </Badge>
      ))}
    </ul>
  );
}
