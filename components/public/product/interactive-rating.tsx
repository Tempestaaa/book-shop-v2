"use client";

import { StarIcon } from "lucide-react";

type Props = {
  rating: number;
  hover: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  setHover: React.Dispatch<React.SetStateAction<number>>;
};

export default function InteractiveRating({
  rating,
  hover,
  setRating,
  setHover,
}: Props) {
  return (
    <div className="flex-center gap-0.5">
      {[...Array(5)].map((_, id) => {
        const value = id + 1;
        return (
          <label key={id}>
            <input
              type="radio"
              name="rating"
              hidden
              onClick={() => setRating(value)}
            />
            <StarIcon
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(0)}
              fill={value <= (hover || rating) ? "var(--star)" : "var(--muted)"}
              className="size-6 text-transparent cursor-pointer"
            />
          </label>
        );
      })}

      <div className="ml-2.5 text-sm">{rating} out of 5</div>
    </div>
  );
}
