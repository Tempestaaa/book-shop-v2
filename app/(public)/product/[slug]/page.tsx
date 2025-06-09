import MyBreadcrumb from "@/components/layout/my-breadcrumb";
import CommunityReviews from "@/components/product/community-reviews";
import DetailsLeft from "@/components/product/details-left";
import DetailsMiddle from "@/components/product/details-middle";
import DetailsRight from "@/components/product/details-right";
import EvaluationStatistics from "@/components/product/evaluation-statistics";
import RelatedProducts from "@/components/product/related-products";
import { Separator } from "@/components/ui/separator";
import { reverseFormatSearchParams } from "@/lib/utils";
import { breadcrumb } from "@/types/common";
import { z } from "zod/v4";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BookDetailsPage({ params }: Props) {
  const { slug } = await params;
  const breadcrumbs: z.infer<typeof breadcrumb>[] = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Fantasy", href: "/shop?genre=fantasy" },
    { label: reverseFormatSearchParams(slug) },
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
