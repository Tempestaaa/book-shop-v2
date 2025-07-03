"use client";

import { Button } from "@/components/ui/button";
import useHandleQuery from "@/hooks/useHandleQuery";
import { XCircleIcon } from "lucide-react";

type Props = {
  term: string;
  side?: "left" | "right";
  isUsingIcon?: boolean;
};

export default function FilterClearButton({
  term,
  side = "left",
  isUsingIcon = false,
}: Props) {
  const { getQuery, deleteURL } = useHandleQuery();

  return (
    <>
      {getQuery(term) && (
        <div className={`flex ${side === "right" && "justify-end-safe"}`}>
          {isUsingIcon ? (
            <button
              onClick={() => deleteURL(term)}
              className="hover:text-destructive duration-300"
            >
              <XCircleIcon className="size-3" />
            </button>
          ) : (
            <Button
              variant="ghost"
              onClick={() => deleteURL(term)}
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
