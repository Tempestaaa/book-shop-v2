"use client";

import FilterWrapper from "@/components/public/shop/filter-wrapper";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useHandleQuery from "@/hooks/useHandleQuery";
import { pageRanges } from "@/lib/common";

export default function FilterByPage() {
  const term = "pages";

  const { isQueryMatch, changeURL } = useHandleQuery();
  const isChecked = (value: string) => isQueryMatch(term, value);

  return (
    <FilterWrapper term={term}>
      <RadioGroup>
        {pageRanges.map(({ label, min, max }) => (
          <div
            onClick={() => changeURL(term, min + "-" + max)}
            key={min + max}
            className="flex items-center gap-4"
          >
            <RadioGroupItem
              checked={isChecked(`${min}-${max}`)}
              value={label}
              id={label}
            />
            <Label htmlFor={label} className="cursor-pointer flex-1 py-0.5">
              {label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </FilterWrapper>
  );
}
