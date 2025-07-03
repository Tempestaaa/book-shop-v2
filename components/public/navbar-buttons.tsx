import SearchDialog from "@/components/public/search-dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BellIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function NavbarButtons() {
  return (
    <div className="flex-center gap-2">
      <SearchDialog />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <BellIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Notification</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCartIcon />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Cart</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
