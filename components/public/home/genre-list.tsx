"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import GenreCard from "@/components/public/home/genre-card";
import bookGenres from "@/data/genres";

export default function GenreList() {
  return (
    <div className="space-y-4">
      <div className="text-heading">Explore these genres</div>

      <Swiper spaceBetween={16} slidesPerView={4}>
        {bookGenres.map(({ id, name }) => (
          <SwiperSlide key={id}>
            <GenreCard name={name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
