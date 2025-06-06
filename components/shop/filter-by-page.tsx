"use client";

import FilterWrapper from "@/components/shop/filter-wrapper";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { pageRanges } from "@/data/common";
import useSearchParamsActions from "@/hooks/useSearchParamsActions";

export default function FilterByPage() {
  const term = "page";

  const { isSearchParamsMatching, changePageURL } = useSearchParamsActions();
  const isChecked = (value: string) => isSearchParamsMatching(term, value);

  return (
    <FilterWrapper term={term}>
      <RadioGroup>
        {pageRanges.map(({ label, min, max }) => (
          <div
            onClick={() => changePageURL(term, min + "-" + max)}
            key={min + max}
            className="flex items-center gap-4"
          >
            <RadioGroupItem
              checked={isChecked(`${min}-${max}`)}
              value={label}
              id={label}
            />
            <Label
              htmlFor={label}
              className="cursor-pointer flex-1 text-sm font-normal"
            >
              {label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </FilterWrapper>
  );
}
