"use client";

import FilterWrapper from "@/components/shop/filter-wrapper";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import useSearchParamsActions from "@/hooks/useSearchParamsActions";
import { useEffect, useState } from "react";

export default function FilterByAvailability() {
  const term = "availability";

  const {
    isSearchParamsMatching,
    changePageURL,
    getSearchParamsValue,
    deletePageURL,
  } = useSearchParamsActions();
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    setIsAvailable(isSearchParamsMatching(term, "true"));
  }, [getSearchParamsValue]);

  const handleCheckboxChange = () => {
    const newValue = !isAvailable;
    setIsAvailable(newValue);

    if (newValue) changePageURL(term, String(newValue));
    else deletePageURL(term);
  };

  return (
    <FilterWrapper term={term}>
      <Label htmlFor={term} className="flex-center gap-4 py-0.5 cursor-pointer">
        <Checkbox
          id={term}
          checked={isAvailable}
          onCheckedChange={handleCheckboxChange}
        />
        <div>In stock</div>
      </Label>
    </FilterWrapper>
  );
}
