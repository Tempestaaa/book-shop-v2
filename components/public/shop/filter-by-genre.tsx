"use client";

import FilterWrapper from "@/components/public/shop/filter-wrapper";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import useHandleQuery from "@/hooks/useHandleQuery";
import bookGenres from "@/mock-data/genres";

export default function FilterByGenre() {
  const term = "genre";

  const { changeURL, isQueryMatch } = useHandleQuery();
  const isChecked = (value: string) => isQueryMatch(term, value);

  return (
    <FilterWrapper term={term}>
      <ScrollArea className="h-64">
        <RadioGroup>
          {bookGenres.map(({ id, name }) => (
            <div
              onClick={() => changeURL(term, name)}
              key={id}
              className="flex items-center gap-4"
            >
              <RadioGroupItem
                checked={isChecked(name)}
                value={name}
                id={name}
              />
              <Label htmlFor={name} className="cursor-pointer flex-1 py-0.5">
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
