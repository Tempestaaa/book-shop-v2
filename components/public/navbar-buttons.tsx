import { auth } from "@/auth";
import NotificationButton from "@/components/public/notification-button";
import SearchDialog from "@/components/public/search-dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default async function NavbarButtons() {
  const session = await auth();

  return (
    <div className="flex-center gap-2">
      <SearchDialog />

      {session?.user && <NotificationButton />}

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
