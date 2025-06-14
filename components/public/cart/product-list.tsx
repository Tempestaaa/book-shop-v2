import CartCard from "@/components/public/cart/cart-card";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductList() {
  return (
    <article className="space-y-8">
      <header className="space-y-1">
        <div className="text-heading">Shopping cart</div>
        <div className="text-sm text-muted-foreground">
          There is currently 1 item in your cart.
        </div>
      </header>

      <section className="p-4 rounded-md shadow-xs shadow-foreground">
        <Table>
          <TableCaption>A list of products you want to buy</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Product</TableHead>
              <TableHead className="text-center font-semibold">Price</TableHead>
              <TableHead className="text-center font-semibold">
                Quanity
              </TableHead>
              <TableHead className="text-right font-semibold">Total</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[...Array(1)].map((_, id) => (
              <CartCard key={id} />
            ))}
          </TableBody>
        </Table>
      </section>
    </article>
  );
}
