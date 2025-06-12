import StarRating from "@/components/product/star-rating";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="space-y-2 group">
      <div className="max-w-60 h-80 mx-auto bg-muted rounded-md overflow-hidden relative">
        <Link href={`/product/${123}`} className="block size-full">
          {/* <Image
            src="/images/product-card.jpg"
            alt="book&apos;s cover"
            fill
            className="object-cover"
          /> */}
        </Link>

        <Button className="absolute bottom-2 right-2 hidden group-hover:inline-flex gap-4">
          <ShoppingCartIcon />
          <div>Add to Cart</div>
        </Button>
      </div>

      <div className="max-w-60 mx-auto">
        <Link href={`/product/${123}`} className="font-medium line-clamp-1">
          This is the book&apos;s title
        </Link>
        <div className="text-sm text-muted-foreground">Author name</div>
        <div className="flex items-center-safe gap-2 my-1">
          <StarRating rating={3.5} size="small" />
          <span className="text-xs text-muted-foreground">(956)</span>
        </div>
        <div className="font-medium text-xl">{formatPrice(45.99)}</div>
      </div>
    </div>
  );
}
