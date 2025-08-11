"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Choose() {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
      {/* Left Side */}
      <div className="flex flex-col gap-8">
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
          Why Choose KirayaaWala
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
          Discover the Stories Behind Every Plot and Every Wall.
        </h2>

        {/* Highlight Card 1 */}
        <div className="relative rounded-xl overflow-hidden">
          <div className="w-full h-64 sm:h-80 md:h-96 relative">
            <Image
              src="/choose1.jpg"
              alt="Bay View"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority
            />
          </div>

          <Card className="sm:absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-8 shadow-lg bg-white/90 backdrop-blur-sm sm:rounded">
            <CardContent className="p-3 sm:p-4 flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="bg-gray-100 p-2 sm:p-3 rounded-md text-lg">
                    🏡
                  </div>
                  <div className="max-w-[250px]">
                    <h3 className="font-semibold text-sm sm:text-base">
                      Bay View
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Enhance your lifestyle with a seamless automation system
                      that brings all home controls to your fingertips.
                    </p>
                  </div>
                </div>

                {/* Stars - Responsive Size */}
                <div className="flex gap-1 text-yellow-500 flex-shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      

        
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-6">
        <div className="w-full h-64 sm:h-80 md:h-96 relative rounded-xl overflow-hidden">
          <Image
            src="/choose2.jpg"
            alt="Interior"
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority
          />
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Control every corner of your home effortlessly through voice commands
          or mobile apps. From climate control to smart locks, redefine your
          lifestyle with cutting-edge technology. Let your home do the thinking.
        </p>
        <Button className="bg-black text-white w-full sm:w-auto">
          View Properties
        </Button>
      </div>
    </section>
  );
}
