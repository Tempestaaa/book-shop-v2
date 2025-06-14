import DateSort from "@/components/public/shop/date-sort";
import RatingSort from "@/components/public/shop/rating-sort";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDownIcon } from "lucide-react";

export default function SortOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <span>Sort</span>
          <ArrowUpDownIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" align="end" className="w-52">
        <DateSort />
        <RatingSort />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
