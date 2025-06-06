"use client";

import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import useSearchParamsActions from "@/hooks/useSearchParamsActions";
import { StarIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const ratingSort: ("All" | number)[] = ["All", 5, 4, 3, 2, 1];

export default function RatingSort() {
  const term = "rating";
  const { changePageURL, getInitialSearchParamsValue } =
    useSearchParamsActions();

  const initialSortValue = Number(
    getInitialSearchParamsValue(term, ratingSort[0].toString())
  );
  const initialDateItem = ratingSort.find((item) => item === initialSortValue);

  const [rating, setRating] = useState(initialDateItem);

  useEffect(() => {
    const currentSortvalue = Number(
      getInitialSearchParamsValue(term, ratingSort[0].toString())
    );
    const updatedDateItem = ratingSort.find(
      (item) => item === currentSortvalue
    );
    if (updatedDateItem !== rating) setRating(updatedDateItem);
  }, [getInitialSearchParamsValue, term, rating]);

  return (
    <DropdownMenuRadioGroup value={rating?.toString()}>
      <DropdownMenuLabel>Rating</DropdownMenuLabel>
      {ratingSort.map((item) => (
        <DropdownMenuRadioItem
          key={item}
          value={item.toString()}
          onClick={() => {
            setRating(item);
            changePageURL(term, item.toString());
          }}
        >
          {item === "All" ? (
            <div>{item}</div>
          ) : (
            <div className="flex-center gap-0.5">
              {[...Array(item)].map((_, id) => (
                <StarIcon
                  key={id}
                  className="text-transparent fill-star size-4"
                />
              ))}
            </div>
          )}
        </DropdownMenuRadioItem>
      ))}
    </DropdownMenuRadioGroup>
  );
}
