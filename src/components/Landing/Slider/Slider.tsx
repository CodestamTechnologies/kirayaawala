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
  {
   
    title: "A Tale of Two Cities",
  },
  {
    
    title: "Hamlet",
  },
  {
    title: "A Dream Within a Dream",
  },
  {
    title: "Pride and Prejudice",
  },
  {
    title: "Moby-Dick",
  },
];
