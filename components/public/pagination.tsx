"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useHandleQuery from "@/hooks/useHandleQuery";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  totalLength: number;
};

export default function Pagination({ totalLength }: Props) {
  const term = "p";

  const { getInitialQuery, changeURL, getQuery } = useHandleQuery();
  const [inputPage, setInputPage] = useState(getInitialQuery(term, "1"));
  const [currentPageFromURL, setCurrentPageFromURL] = useState(
    Number(getInitialQuery(term, "1"))
  );

  useEffect(() => {
    setCurrentPageFromURL(Number(getQuery(term) || "1"));
  }, [term, getQuery]);

  return (
    <div className="flex-center gap-2 justify-center-safe">
      <Button
        disabled={currentPageFromURL === 1}
        onClick={() => {
          setInputPage("1");
          changeURL(term, "1");
        }}
      >
        <ChevronsLeftIcon />
      </Button>

      <Button
        disabled={currentPageFromURL === 1}
        onClick={() => {
          const newPage = (currentPageFromURL - 1).toString();
          setInputPage(newPage);
          changeURL(term, newPage);
        }}
      >
        <ChevronLeftIcon />
      </Button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newPage = Math.min(
            1,
            Math.min(totalLength, Number(inputPage))
          ).toString();
          setInputPage(newPage);
          changeURL(term, newPage);
        }}
        className="mx-4 flex-center gap-2"
      >
        <Input
          type="number"
          min={1}
          max={totalLength}
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          onBlur={() => {
            const numInputPage = Number(inputPage);
            if (
              isNaN(numInputPage) ||
              numInputPage < 1 ||
              numInputPage > totalLength
            )
              setInputPage(currentPageFromURL.toString());
            else setInputPage(numInputPage.toString());
          }}
          className="text-center w-16"
        />
        <span>/</span>
        <span>{totalLength}</span>
      </form>

      <Button
        disabled={currentPageFromURL === totalLength}
        onClick={() => {
          const newPage = (currentPageFromURL + 1).toString();
          setInputPage(newPage);
          changeURL(term, newPage);
        }}
      >
        <ChevronRightIcon />
      </Button>

      <Button
        disabled={currentPageFromURL === totalLength}
        onClick={() => {
          const newPage = totalLength.toString();
          setInputPage(newPage);
          changeURL(term, newPage);
        }}
      >
        <ChevronsRightIcon />
      </Button>
    </div>
  );
}
