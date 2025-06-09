import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function CartButton() {
  const mockCart = 123;

  return (
    <Button
      variant={mockCart > 0 ? "default" : "ghost"}
      className="relative"
      asChild
    >
      <Link href="/cart">
        <ShoppingCartIcon />
        <div className="text-sm">{mockCart > 9 ? "9+" : mockCart}</div>
      </Link>
    </Button>
  );
}
