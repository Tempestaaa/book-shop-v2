"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import ProductCard from "@/components/public/product/product-card";

type Props = {
  genreName: string;
};

export default function ProductCarousel({ genreName }: Props) {
  return (
    <section className="space-y-4">
      <header className="text-heading">{genreName}</header>

      <Swiper
        spaceBetween={16}
        slidesPerView={5}
        modules={[Autoplay]}
        autoplay={{ pauseOnMouseEnter: true }}
      >
        {[...Array(16)].map((_, id) => (
          <SwiperSlide key={id}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
