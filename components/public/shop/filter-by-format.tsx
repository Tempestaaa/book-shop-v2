"use client";

import FilterWrapper from "@/components/public/shop/filter-wrapper";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useHandleQuery from "@/hooks/useHandleQuery";
import { bookFormat } from "@/types/product";

export default function FilterByFormat() {
  const term = "format";

  const { isQueryMatch, changeURL } = useHandleQuery();
  const isChecked = (value: string) => isQueryMatch(term, value);

  return (
    <FilterWrapper term={term}>
      <RadioGroup>
        {bookFormat.options.map((item) => (
          <div
            onClick={() => changeURL(term, item)}
            key={item}
            className="flex items-center gap-4"
          >
            <RadioGroupItem checked={isChecked(item)} value={item} id={item} />
            <Label htmlFor={item} className="cursor-pointer flex-1 py-0.5">
              {item}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </FilterWrapper>
  );
}
