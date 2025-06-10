import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/utils";

export default function OrdersPage() {
  return (
    <div className="space-y-4">
      <section className="flex-center gap-4 justify-between">
        <header className="text-4xl font-bold">My orders</header>

        <Input
          placeholder="Search"
          className="w-54 focus:w-72 transition-[width] duration-300"
        />
      </section>

      <section className="overflow-hidden">
        <Table className="max-w-full w-full">
          <TableCaption>A list of your recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">ORD001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>This is the book&apos;s title</TableCell>
              <TableCell className="text-right">{formatPrice(250)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
