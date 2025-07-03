"use client";

import { Button } from "@/components/ui/button";
import { filterTheseArray } from "@/lib/common";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function FilterClearAll() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const showFilters = useMemo(() => {
    const keys = Array.from(searchParams.keys());
    const filterThese = keys.filter((item) => filterTheseArray.includes(item));

    return {
      array: filterThese,
      isShow: filterThese.length > 0,
    };
  }, [searchParams]);

  const handleClearAll = () => push(pathname, { scroll: false });

  return (
    <div className="h-10 flex-center justify-end-safe">
      {showFilters.isShow && (
        <Button onClick={handleClearAll}>Clear all</Button>
      )}
    </div>
  );
}
