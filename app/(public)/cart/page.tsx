import { auth } from "@/auth";
import PaymentPromo from "@/components/public/cart/payment-promo";
import ProductList from "@/components/public/cart/product-list";
import MyBreadcrumb from "@/components/public/my-breadcrumb";
import RelatedProducts from "@/components/public/product/related-products";
import { Item } from "@/types/common";

export default async function CartPage() {
  const session = await auth();

  const breadcrumbs: Item[] = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];

  return (
    <div className="space-y-8">
      <MyBreadcrumb breadcrumbs={breadcrumbs} />

      <section className="grid grid-cols-12 gap-8 min-h-120">
        <div className="col-span-9">
          {session?.user ? (
            <ProductList />
          ) : (
            <div className="text-center text-subheading content-center h-full">
              You must login to interact with this feature.
            </div>
          )}
        </div>

        <div className="col-span-3">
          <PaymentPromo />
        </div>
      </section>

      {/* Todo: Visible when there's at least 1 item in the cart */}
      <RelatedProducts />
    </div>
  );
}
