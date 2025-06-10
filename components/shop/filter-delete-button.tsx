"use client";

import { Button } from "@/components/ui/button";
import useSearchParamsActions from "@/hooks/useSearchParamsActions";
import { XCircleIcon } from "lucide-react";

type Props = {
  term: string;
  side?: "left" | "right";
  isUsingIcon?: boolean;
};

export default function FilterDeleteButton({
  term,
  side = "left",
  isUsingIcon = false,
}: Props) {
  const { getSearchParamsValue, deletePageURL } = useSearchParamsActions();

  return (
    <>
      {getSearchParamsValue(term) && (
        <div className={`flex ${side === "right" && "justify-end-safe"}`}>
          {isUsingIcon ? (
            <button
              onClick={() => deletePageURL(term)}
              className="hover:text-destructive duration-300"
            >
              <XCircleIcon className="size-3" />
            </button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deletePageURL(term)}
              className="hover:text-destructive"
            >
              Clear
            </Button>
          )}
        </div>
      )}
    </>
  );
}
