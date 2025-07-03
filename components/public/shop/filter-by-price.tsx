"use client";

import FilterClearButton from "@/components/public/shop/filter-clear-button";
import FilterWrapper from "@/components/public/shop/filter-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useHandleQuery from "@/hooks/useHandleQuery";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const MIN_PRICE = 0 as const;
const MAX_PRICE = 500 as const;

export default function FilterByPrice() {
  const term = "price";

  const { getQuery, changeURL } = useHandleQuery();

  const minPrice = Number(getQuery(term)?.split("-")[0]) || MIN_PRICE;
  const maxPrice = Number(getQuery(term)?.split("-")[1]) || MAX_PRICE;

  const [price, setPrice] = useState<[number, number]>([minPrice, maxPrice]);

  return (
    <FilterWrapper term={term} isShowButton={false}>
      <div className="h-8 grid-center">
        <RangeSlider
          id="range-slider"
          value={[price[0], price[1]]}
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={10}
          onInput={setPrice}
        />
      </div>

      <div className="flex-center justify-between gap-4">
        <Input
          type="number"
          value={price[0]}
          onChange={(e) => setPrice([Number(e.target.value), maxPrice])}
          className="w-16 text-center"
        />

        <Input
          type="number"
          value={price[1]}
          onChange={(e) => setPrice([minPrice, Number(e.target.value)])}
          className="w-16 text-center"
        />
      </div>

      <div className="flex-center justify-between gap-4">
        <Button
          variant="ghost"
          onClick={() => changeURL(term, `${price[0] + "-" + price[1]}`)}
        >
          Apply
        </Button>

        <FilterClearButton term={term} />
      </div>
    </FilterWrapper>
  );
}
