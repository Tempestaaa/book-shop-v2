"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "@/components/public/product/product-card";

export default function RelatedProducts() {
  return (
    <div className="space-y-4">
      <div className="text-heading">Related Products</div>

      <Swiper
        spaceBetween={16}
        slidesPerView={6}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ dynamicBullets: true }}
      >
        {[...Array(16)].map((_, id) => (
          <SwiperSlide key={id}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
