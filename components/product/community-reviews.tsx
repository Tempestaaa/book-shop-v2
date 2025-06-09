import ReviewCard from "@/components/product/review-card";
import Pagination from "@/components/ui/pagination";

export default function CommunityReviews() {
  return (
    <section className="space-y-3">
      <section className="text-xl font-bold">Community Reviews</section>

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
