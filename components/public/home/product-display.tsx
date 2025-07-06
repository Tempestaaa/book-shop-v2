"use client";

import ProductCard from "@/components/public/product/product-card";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
  buttonLabel: string;
  lightMode?: boolean;
};

export default function ProductDisplay({
  href,
  label,
  buttonLabel,
  lightMode = false,
}: Props) {
  return (
    <section
      className={`flex flex-col gap-8 py-16 rounded-md ${
        lightMode && "text-background bg-foreground"
      }`}
    >
      <header className="text-heading text-center">{label}</header>

      <section>
        <Swiper
          spaceBetween={16}
          slidesPerView={5}
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
      </section>

      <Button className="rounded-full w-fit mx-auto mt-8 px-8" asChild>
        <Link href={href}>{buttonLabel}</Link>
      </Button>
    </section>
  );
}
