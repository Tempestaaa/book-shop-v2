import TotalItem from "@/components/public/cart/total-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function PaymentPromo() {
  return (
    <article className="rounded-md p-4 shadow-xs shadow-foreground">
      <section className="space-y-4">
        <header className="text-subheading">Promotion code</header>
        <div className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          eos!
        </div>
        <form className="flex flex-col gap-2">
          <Input placeholder="Enter your promotion" />
          <Button type="submit" className="">
            Apply
          </Button>
        </form>
      </section>

      <Separator className="my-8" />

      <section className="flex flex-col gap-4">
        <header className="text-subheading">Summary</header>
        <div className="">
          <TotalItem label="Cart total" value={29.99} />
          <TotalItem label="VAT" value={29.99 * 0.02} />
          <TotalItem label="Discount" value={29.99 * 0.08} />
          <TotalItem label="Shipping" value="Free" />
          <TotalItem
            label="Total"
            isTotal
            value={29.99 + 29.99 * 0.02 - 29.99 * 0.08}
          />
        </div>
        <Button>Proceed to checkout</Button>
      </section>
    </article>
  );
}
