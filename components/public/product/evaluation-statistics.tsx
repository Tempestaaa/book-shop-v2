"use client";

import StarRating from "@/components/public/product/star-rating";
import useHandleQuery from "@/hooks/useHandleQuery";

const rating = {
  1: 20,
  2: 10,
  3: 40,
  4: 80,
  5: 100,
};

export default function EvaluationStatistics() {
  const total = Object.values(rating).reduce((sum, count) => sum + count, 0);
  const { isQueryMatch, changeURL } = useHandleQuery();

  return (
    <div className="flex flex-col gap-3">
      <section className="text-heading">Statistics</section>

      <section className="flex items-center-safe gap-4 text-2xl">
        <StarRating rating={4.5} showScore />
        <span className="text-sm">(954 reviews)</span>
      </section>

      <div className="space-y-1">
        {Object.entries(rating)
          .sort((a, b) => Number(b[0]) - Number(a[0]))
          .map(([stars, count]) => {
            const percentage = ((count / total) * 100).toFixed(1);
            return (
              <div
                key={stars}
                onClick={() => changeURL("sort", stars)}
                className={`flex items-center-safe gap-4 py-2 px-2 outline-2 outline-transparent rounded hover:outline-foreground duration-300 cursor-pointer group ${
                  isQueryMatch("sort", stars) && "!outline-foreground"
                }`}
              >
                <div className="w-16 group-hover:underline underline-offset-2">{`${stars} ${
                  Number(stars) === 1 ? "star" : "stars"
                }`}</div>

                <div className="rounded bg-muted h-6 flex-1 overflow-hidden relative">
                  <div
                    className="rounded-r bg-star h-full"
                    style={{ width: `${percentage}%` }}
                  />

                  <span className="absolute top-1/2 -translate-y-1/2 right-2 text-xs">
                    {count}
                  </span>
                </div>

                <div className="text-right w-12 text-xs text-muted-foreground group-hover:text-foreground duration-300">{`(${percentage}%)`}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
