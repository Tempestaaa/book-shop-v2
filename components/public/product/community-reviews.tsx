import Pagination from "@/components/public/pagination";
import ReviewCard from "@/components/public/product/review-card";
import WriteReview from "@/components/public/product/write-review";

export default function CommunityReviews() {
  return (
    <section className="space-y-3">
      <section className="flex-center gap-4 justify-between">
        <header className="text-heading">Community Reviews</header>

        <WriteReview />
      </section>

      <section className="space-y-8">
        <div className="space-y-4">
          {[...Array(5)].map((_, id) => (
            <ReviewCard key={id} />
          ))}
        </div>

        <Pagination totalLength={Array(10).length} />
      </section>
    </section>
  );
}
