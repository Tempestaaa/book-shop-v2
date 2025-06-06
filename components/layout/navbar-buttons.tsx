import { Button } from "@/components/ui/button";
import { BellIcon, ShoppingCartIcon } from "lucide-react";

export default function NavbarButtons() {
  return (
    <div className="flex-center gap-2">
      <Button variant="ghost" size="icon">
        <ShoppingCartIcon />
      </Button>

      <Button variant="ghost" size="icon">
        <BellIcon />
      </Button>
    </div>
  );
}
