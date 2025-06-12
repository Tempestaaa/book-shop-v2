"use client";

import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { ratingSort } from "@/data/common";
import useSearchParamsActions from "@/hooks/useSearchParamsActions";
import { StarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function RatingSort() {
  const term = "rating";
  const { changePageURL, getInitialSearchParamsValue } =
    useSearchParamsActions();

  const initialSortValue = getInitialSearchParamsValue(
    term,
    ratingSort[0].href
  );
  const initialDateItem = ratingSort.find(
    (item) => item.href === initialSortValue
  );

  const [rating, setRating] = useState(initialDateItem);

  useEffect(() => {
    const currentSortvalue = getInitialSearchParamsValue(
      term,
      ratingSort[0].href
    );
    const updatedDateItem = ratingSort.find(
      (item) => item.href === currentSortvalue
    );
    if (updatedDateItem !== rating?.href) setRating(updatedDateItem);
  }, [getInitialSearchParamsValue, term, rating]);

  return (
    <DropdownMenuRadioGroup value={rating?.href}>
      <DropdownMenuLabel>Rating</DropdownMenuLabel>
      {ratingSort.map((item) => {
        const Icon = item.icon;
        return (
          <DropdownMenuRadioItem
            key={item.href}
            value={item.href}
            onClick={() => {
              setRating(item);
              changePageURL(term, item.href);
            }}
            className="flex-center gap-3"
          >
            <div className="flex-center">
              <StarIcon className="size-4 fill-star text-transparent" />
              <Icon />
            </div>
            <span>{item.label}</span>
          </DropdownMenuRadioItem>
        );
      })}
    </DropdownMenuRadioGroup>
  );
}
