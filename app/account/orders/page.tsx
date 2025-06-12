import { Badge } from "@/components/ui/badge";
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
import { formatDate, formatPrice } from "@/lib/utils";

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <section className="flex-center gap-4 justify-between">
        <header className="text-heading">My orders</header>

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
              <TableHead className="w-[100px] font-semibold">Invoice</TableHead>
              <TableHead className=" font-semibold">Status</TableHead>
              <TableHead className=" font-semibold">Method</TableHead>
              <TableHead className=" font-semibold">Date</TableHead>
              <TableHead className=" font-semibold">Product</TableHead>
              <TableHead className="text-right font-semibold">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="font-medium">ORD001</TableCell>
              <TableCell>
                <Badge>Paid</Badge>
              </TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>{formatDate(new Date())}</TableCell>
              <TableCell>This is the book&apos;s title</TableCell>
              <TableCell className="text-right">{formatPrice(250)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
