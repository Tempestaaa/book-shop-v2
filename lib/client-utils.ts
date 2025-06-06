"use client";

import { onlyFilterThese } from "@/data/common";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const showFilters = () => {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const keys = Array.from(searchParams.keys());
    const filterThese = keys.filter((key) => onlyFilterThese.includes(key));

    return {
      array: filterThese,
      isShow: filterThese.length > 0,
    };
  }, [searchParams]);
};
