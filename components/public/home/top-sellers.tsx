"use client";

import ProductCard from "@/components/public/product/product-card";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

export default function TopSellers() {
  return (
    <section className="space-y-4">
      <header className="text-heading">Top sellers</header>

      <Swiper
        spaceBetween={16}
        slidesPerView={4}
        modules={[Autoplay]}
        autoplay={{ pauseOnMouseEnter: true }}
      >
        {[...Array(16)].map((_, id) => (
          <SwiperSlide key={id} className="relative">
            <div className="absolute top-0 left-0 text-8xl font-bold z-10 text-shadow-[8px_8px_0px] text-shadow-background">
              {id + 1}
            </div>
            <ProductCard size="lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
