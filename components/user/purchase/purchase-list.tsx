import { Input } from "@/components/ui/input";
import PurchaseItem from "@/components/user/purchase/purchase-item";

export default function PurchaseList() {
  return (
    <section className="space-y-4">
      <Input placeholder="You can search by ID or book's title" />

      <ul className="space-y-8 divide-y">
        {[...Array(1)].map((_, id) => (
          <PurchaseItem key={id} />
        ))}
      </ul>
    </section>
  );
}
