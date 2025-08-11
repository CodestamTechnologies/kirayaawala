"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const stats = [
  { value: "3665 sft", label: "Property size upto" },
  { value: "8000+", label: "Monthly Users" },
  { value: "4+", label: "Happy Customers" },
  { value: "2+", label: "Property Listed" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-[150vh] md:h-screen flex flex-col justify-center text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/herobg.jpg"
          alt="Building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col items-center text-center px-6 mt-10">
        <p className="uppercase tracking-widest text-sm md:text-base text-gray-200">
          Get Your Dream House
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mt-3">
          KIRAYAAWALA
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-gray-300">
          Discover the perfect rental property tailored to your needs.  
          We connect tenants and property owners with ease, efficiency, and trust.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            variant="default"
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
          >
            Discover More
          </Button>
          <Button
            variant="secondary"
            className="text-lg px-8 py-6"
          >
            Call Us Now
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map(({ value, label }, i) => (
            <Card
              key={i}
              className="bg-white/95 text-black rounded-xl shadow-lg border border-gray-200"
            >
              <CardContent className="flex flex-col items-center py-6">
                <p className="text-2xl md:text-3xl font-bold">{value}</p>
                <p className="text-sm md:text-base text-gray-600">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
