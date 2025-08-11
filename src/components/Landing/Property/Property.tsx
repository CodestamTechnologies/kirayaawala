"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const properties = [
  
  {
    title: "Mountain Escape",
    location: "Manali, Himachal Pradesh",
    description:
      "Perfect for nature lovers — surrounded by mountains and fresh air.",
    image: "/herobg.jpg",
    postedBy: "Ravi Verma",
    rating: 5,
    details: ["300 m2", "1 Pool", "3 Bathroom", "4 Bed Room", "Wood Finish"],
    badge: "New",
  },
  {
    title: "Bay View",
    location: "Ranchi, Angara, Jharkhand",
    description:
      "The living room is the heart of the home—a space designed for comfort, relaxation, & gathering.",
    image: "/herobg.jpg",
    postedBy: "Aman Kumar",
    rating: 5,
    details: ["250 m2", "1 Pool", "2 Bathroom", "3 Bed Room", "White"],
    badge: "Latest",
  },
  {
    title: "Ocean Breeze",
    location: "Goa, India",
    description:
      "A breezy villa with an ocean view that feels like a permanent vacation spot.",
    image: "/herobg.jpg",
    postedBy: "Priya Sharma",
    rating: 4,
    details: ["200 m2", "Beachfront", "2 Bathroom", "2 Bed Room", "Blue Theme"],
    badge: "Hot Deal",
  },
  {
    title: "Mountain Escape",
    location: "Manali, Himachal Pradesh",
    description:
      "Perfect for nature lovers — surrounded by mountains and fresh air.",
    image: "/herobg.jpg",
    postedBy: "Ravi Verma",
    rating: 5,
    details: ["300 m2", "1 Pool", "3 Bathroom", "4 Bed Room", "Wood Finish"],
    badge: "New",
  },
];

export default function PropertyCarousel() {
  return (
    <section className="container mx-auto pt-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-extrabold">Property</h1>
        <p className="text-gray-500 mt-2">
          Room overview with a dope look
        </p>
      </div>

      {/* Carousel */}
      <Carousel className="w-full flex flex-col gap-5">
        <CarouselContent>
          {properties.map((property, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 px-4"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Left Side */}
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h2 className="text-xl font-bold">{property.title}</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <MapPin size={16} />
                      {property.location}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {property.description}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 text-yellow-500">
                    {Array.from({ length: property.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-gray-500 text-sm">
                    ~ Posted by{" "}
                    <span className="font-medium">{property.postedBy}</span>
                  </p>

                  {/* Property Details */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {property.details.map((detail, i) => (
                      <Badge key={i} variant="secondary">
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right Side */}
                <div className="relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    width={800}
                    height={500}
                    className="object-cover h-64 w-full"
                  />

                  {/* Overlay Buttons */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Button
                      size="sm"
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      Contact
                    </Button>
                    <Button size="sm" variant="secondary">
                      + Wishlist
                    </Button>
                  </div>

                  {property.badge && (
                    <Badge className="absolute top-4 right-4 bg-yellow-400 text-black">
                      {property.badge}
                    </Badge>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-6 mt-6">
          <CarouselPrevious className="!absolute-0" />
          <CarouselNext className="!absolute-0" />
        </div>
      </Carousel>
    </section>
  );
}
