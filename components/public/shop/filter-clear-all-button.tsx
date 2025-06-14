"use client";

import { Button } from "@/components/ui/button";
import { onlyFilterThese } from "@/data/common";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function FilterClearAllButton() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const showFilters = useMemo(() => {
    const keys = Array.from(searchParams.keys());
    const filterThese = keys.filter((key) => onlyFilterThese.includes(key));

    return {
      array: filterThese,
      isShow: filterThese.length > 0,
    };
  }, [searchParams]);

  const handleDeleteSearchParams = () =>
    router.replace(pathname, { scroll: false });

  return (
    <>
      {showFilters.isShow && (
        <Button
          variant="ghost"
          className="text-sm hover:text-destructive"
          onClick={handleDeleteSearchParams}
        >
          Clear all
        </Button>
      )}
    </>
  );
}
