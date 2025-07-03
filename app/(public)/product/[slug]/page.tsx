import MyBreadcrumb from "@/components/public/my-breadcrumb";
import CommunityReviews from "@/components/public/product/community-reviews";
import DetailsLeft from "@/components/public/product/details-left";
import DetailsMiddle from "@/components/public/product/details-middle";
import DetailsRight from "@/components/public/product/details-right";
import EvaluationStatistics from "@/components/public/product/evaluation-statistics";
import RelatedProducts from "@/components/public/product/related-products";
import { Separator } from "@/components/ui/separator";
import { unslugify } from "@/lib/utils";
import { Item } from "@/types/common";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  const breadcrumbs: Item[] = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Fantasy", href: "/shop?genre=fantasy" },
    { label: unslugify(slug) },
  ];

  return (
    <article className="col-span-12 space-y-6">
      <MyBreadcrumb breadcrumbs={breadcrumbs} />

      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <DetailsLeft />
        </div>

        <div className="col-span-6 space-y-8">
          <DetailsMiddle />
          <Separator />
          <EvaluationStatistics />
          <Separator />
          <CommunityReviews />
        </div>

        <div className="col-span-3">
          <DetailsRight />
        </div>
      </section>

      <RelatedProducts />
    </article>
  );
}
