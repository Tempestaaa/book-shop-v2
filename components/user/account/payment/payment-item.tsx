import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DeletePaymentForm from "@/components/user/account/payment/delete-payment-form";

export default function PaymentItem() {
  return (
    <li className="flex-center gap-8">
      {/* Todo: Add bank image */}
      <div className="bg-muted size-20 rounded-md" />

      <section className="flex-1 space-y-1">
        <div className="flex-center gap-4">
          <p className="font-medium">Bank name</p>
          <Badge>Default</Badge>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Name: Lorem ipsum dolor sit</p>
          <p>Branch: Lorem ipsum dolor sit</p>
        </div>
      </section>

      <section className="flex-center gap-2">
        <DeletePaymentForm />
        <Button variant="ghost">Mark as default</Button>
      </section>
    </li>
  );
}
