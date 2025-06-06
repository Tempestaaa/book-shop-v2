"use client";

import { Button } from "@/components/ui/button";
import { showFilters } from "@/lib/client-utils";
import { usePathname, useRouter } from "next/navigation";

export default function FilterClearAllButton() {
  const pathname = usePathname();
  const router = useRouter();

  const handleDeleteSearchParams = () =>
    router.replace(pathname, { scroll: false });

  return (
    <div className="flex justify-end-safe">
      {showFilters().isShow && (
        <Button
          variant="ghost"
          className="text-sm hover:text-destructive"
          onClick={handleDeleteSearchParams}
        >
          Clear all
        </Button>
      )}
    </div>
  );
}
