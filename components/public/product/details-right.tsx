"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatPrice } from "@/lib/utils";
import { bookFormat } from "@/types/product";
import { ShoppingCartIcon } from "lucide-react";
import { useState } from "react";

export default function DetailsRight() {
  const saveOff = (price: number, originalPrice: number) =>
    (1 - price / originalPrice) * 100;

  const [format, setFormat] = useState(bookFormat.options[0]);

  return (
    <section className="flex flex-col gap-4 shadow-xs shadow-foreground rounded-md p-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full">
            Choose a format
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side="bottom"
          align="center"
          className="min-w-74 max-w-74"
        >
          <DropdownMenuRadioGroup value={format}>
            {bookFormat.options.map((item) => (
              <DropdownMenuRadioItem
                key={item}
                value={item}
                onClick={() => setFormat(item)}
                className="cursor-pointer"
              >
                {item}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <section className="space-y-2 mt-2">
        <div className="flex-center gap-4 justify-between">
          <div className="text-sm">{format}</div>

          {saveOff(30.99, 49.99) !== 0 && (
            <div className="flex justify-end-safe">
              <Badge>Save {saveOff(30.99, 49.99).toFixed()}%</Badge>
            </div>
          )}
        </div>

        <div className="flex items-end-safe gap-4 justify-between">
          <s className="text-muted-foreground">{formatPrice(49.99)}</s>
          <div className="text-4xl font-bold">{formatPrice(30.99)}</div>
        </div>
      </section>

      <Button>
        <ShoppingCartIcon />
        <span>Add to Cart</span>
      </Button>
    </section>
  );
}
