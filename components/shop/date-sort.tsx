"use client";

import {
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import useSearchParamsActions from "@/hooks/useSearchParamsActions";
import { OptionsWithIcon } from "@/types/common";
import { CalendarArrowDownIcon, CalendarArrowUpIcon } from "lucide-react";
import { useEffect, useState } from "react";

const dateSort: OptionsWithIcon[] = [
  {
    name: "Latest",
    href: "desc",
    icon: CalendarArrowDownIcon,
  },
  {
    name: "Oldest",
    href: "asc",
    icon: CalendarArrowUpIcon,
  },
];

export default function DateSort() {
  const term = "release-date";
  const { changePageURL, getInitialSearchParamsValue } =
    useSearchParamsActions();

  const initialSortValue = getInitialSearchParamsValue(term, dateSort[0].href);
  const initialDateItem = dateSort.find(
    (item) => item.href === initialSortValue
  );

  const [date, setDate] = useState(initialDateItem);

  useEffect(() => {
    const currentSortvalue = getInitialSearchParamsValue(
      term,
      dateSort[0].href
    );
    const updatedDateItem = dateSort.find(
      (item) => item.href === currentSortvalue
    );
    if (updatedDateItem !== date?.href) setDate(updatedDateItem);
  }, [getInitialSearchParamsValue, term, date]);

  return (
    <DropdownMenuRadioGroup value={date?.href}>
      <DropdownMenuLabel>Release date</DropdownMenuLabel>
      {dateSort.map((item) => {
        const Icon = item.icon;
        return (
          <DropdownMenuRadioItem
            key={item.href}
            value={item.href}
            onClick={() => {
              setDate(item);
              changePageURL(term, item.href);
            }}
            className="flex-center gap-3"
          >
            <Icon />
            <span>{item.name}</span>
          </DropdownMenuRadioItem>
        );
      })}
    </DropdownMenuRadioGroup>
  );
}
