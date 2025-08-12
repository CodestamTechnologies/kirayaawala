"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { rooms } from "@/components/data/types";

// Example: Replace with your real rooms data fetching


export default function RoomDetailsPage() {
  const params = useParams();
  const roomId = params.id as string;

  const room = rooms.find((r) => r.id === roomId);

  if (!room) {
    return <div className="p-8 text-center">Room not found</div>;
  }

  return (
    <section className="max-w-5xl mx-auto p-6 mt-30">
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src={room.image}
          alt={room.name}
          width={800}
          height={500}
          className="rounded-xl object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{room.name}</h1>
          <div className="flex items-center text-yellow-500 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.round(room.rating) ? "fill-yellow-500" : ""
                }`}
              />
            ))}
            <span className="ml-2 text-gray-500">({room.reviews} reviews)</span>
          </div>
          <p className="text-lg text-indigo-600 font-bold mb-4">
            ₹{room.price.toLocaleString()}
          </p>
          <p className="text-gray-700 mb-6">{room.location}</p>
          <Button>Book Now</Button>
        </div>
      </div>
    </section>
  );
}
