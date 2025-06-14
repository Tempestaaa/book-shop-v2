"use client";

import FilterWrapper from "@/components/public/shop/filter-wrapper";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useSearchParamsActions from "@/hooks/useSearchParamsActions";
import { bookFormat } from "@/types/book";

export default function FilterByFormat() {
  const term = "format";

  const { isSearchParamsMatching, changePageURL } = useSearchParamsActions();
  const isChecked = (value: string) => isSearchParamsMatching(term, value);

  return (
    <FilterWrapper term={term}>
      <RadioGroup>
        {bookFormat.options.map((item) => (
          <div
            onClick={() => changePageURL(term, item)}
            key={item}
            className="flex items-center gap-4"
          >
            <RadioGroupItem checked={isChecked(item)} value={item} id={item} />
            <Label
              htmlFor={item}
              className="cursor-pointer flex-1 text-sm font-normal"
            >
              {item}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </FilterWrapper>
  );
}
