import MyBreadcrumb from "@/components/layout/my-breadcrumb";
import PaymentPromo from "@/components/public/cart/payment-promo";
import ProductList from "@/components/public/cart/product-list";
import RelatedProducts from "@/components/public/product/related-products";
import { Options } from "@/types/common";

export default function CartPage() {
  const breadcrumbs: Options[] = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];

  return (
    <div className="col-span-12 space-y-8">
      <MyBreadcrumb breadcrumbs={breadcrumbs} />

      <section className="grid grid-cols-12 gap-8">
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
