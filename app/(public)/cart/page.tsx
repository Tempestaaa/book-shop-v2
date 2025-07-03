import PaymentPromo from "@/components/public/cart/payment-promo";
import ProductList from "@/components/public/cart/product-list";
import MyBreadcrumb from "@/components/public/my-breadcrumb";
import RelatedProducts from "@/components/public/product/related-products";
import { Item } from "@/types/common";

export default function CartPage() {
  const breadcrumbs: Item[] = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];

  return (
    <div className="space-y-8">
      <MyBreadcrumb breadcrumbs={breadcrumbs} />

      <section className="grid grid-cols-12 gap-8 min-h-dvh">
        <div className="col-span-9">
          <ProductList />
        </div>

        <div className="col-span-3">
          <PaymentPromo />
        </div>
      </section>

      <RelatedProducts />
    </div>
  );
}
