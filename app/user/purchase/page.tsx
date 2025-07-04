import PurchaseList from "@/components/user/purchase/purchase-list";
import PurchaseTabs from "@/components/user/purchase/purchase-tabs";

export default function PurchasePage() {
  return (
    <article className="space-y-4">
      <PurchaseTabs />
      <PurchaseList />
    </article>
  );
}
