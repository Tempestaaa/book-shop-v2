"use client";

import FilterWrapper from "@/components/public/shop/filter-wrapper";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import bookGenres from "@/data/genres";
import useSearchParamsActions from "@/hooks/useSearchParamsActions";

export default function FilterByGenre() {
  const term = "genre";

  const { isSearchParamsMatching, changePageURL } = useSearchParamsActions();
  const isChecked = (value: string) => isSearchParamsMatching(term, value);

  return (
    <FilterWrapper term={term}>
      <ScrollArea className="h-64">
        <RadioGroup>
          {bookGenres.map(({ id, name }) => (
            <div
              onClick={() => changePageURL(term, name)}
              key={id}
              className="flex items-center gap-4"
            >
              <RadioGroupItem
                checked={isChecked(name)}
                value={name}
                id={name}
              />
              <Label
                htmlFor={name}
                className="cursor-pointer flex-1 text-sm font-normal"
              >
                {name}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <ScrollBar />
      </ScrollArea>
    </FilterWrapper>
  );
}
