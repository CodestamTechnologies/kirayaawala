"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React, { useEffect, useState } from "react";

export function Slider() {
  return (
    <div className="h-[10rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}
const testimonials = [
  { title: "Convenient" },
  { title: "Trustworthy" },
  { title: "Affordable" },
  { title: "Seamless" },
  { title: "Reliable" },
  { title: "Efficient" },
  { title: "Comfortable" },
  { title: "Flexible" },
  { title: "Secure" },
  { title: "Quick" },
];

