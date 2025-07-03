import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PaymentList from "@/components/user/account/payment/payment-list";
import UserHeader from "@/components/user/user-header";
import { PlusIcon } from "lucide-react";

export default function PaymentPage() {
  return (
    <article className="space-y-4">
      <div className="flex-center gap-4 justify-between">
        <UserHeader label="Payment" description="Manage bank payment methods" />

        <Button>
          <PlusIcon />
          <span>Add bank</span>
        </Button>
      </div>
      <Separator />
      <PaymentList />
    </article>
  );
}
