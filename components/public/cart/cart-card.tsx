import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatPrice } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

export default function CartCard() {
  return (
    <TableRow className="">
      <TableCell className="flex-center gap-4">
        <Link
          href={`/product/123`}
          className="block max-w-16 min-w-16 h-20 w-full bg-muted rounded-md relative shrink-0"
        />
        <div className="flex flex-col gap-1">
          <Badge>Fantasy</Badge>
          <Link href={`/product/123`} className="font-semibold">
            This is the book&apos;s title
          </Link>
          <div className="text-sm text-muted-foreground">by Author name</div>
        </div>
      </TableCell>
      <TableCell className="text-center">{formatPrice(29.99)}</TableCell>
      <TableCell>
        <div className="flex-center justify-center-safe gap-2">
          <Button variant="outline" size="sm">
            <MinusIcon />
          </Button>

          <Input
            type="number"
            placeholder="1"
            className="text-center w-12 border-none bg-transparent"
          />

          <Button variant="outline" size="sm">
            <PlusIcon />
          </Button>
        </div>
      </TableCell>
      <TableCell className="text-right text-heading">
        {formatPrice(29.99)}
      </TableCell>
    </TableRow>
  );
}
