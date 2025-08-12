"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Link from "next/link";
import { Room } from "@/components/data/types";


interface RoomsPageProps {
    rooms: Room[];
}

export default function RoomsPage({ rooms }: RoomsPageProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    // Group rooms by category
    const categories = rooms.reduce((acc, room) => {
        if (!acc[room.category]) {
            acc[room.category] = [];
        }
        acc[room.category].push(room);
        return acc;
    }, {} as Record<string, Room[]>);

    // All unique category names
    const categoryList = Object.keys(categories);

    // Filtered categories based on selection
    const filteredCategories =
        selectedCategory === "all"
            ? categories
            : { [selectedCategory]: categories[selectedCategory] || [] };

    return (
        <section className="bg-gray-50 py-5 px-4 ">
            <div className="max-w-7xl mx-auto">
                {/* Page Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Explore Our Featured Rentals
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Explore handpicked rooms by category
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center mb-8">
                    <Select onValueChange={(value) => setSelectedCategory(value)}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categoryList.map((cat, i) => (
                                <SelectItem key={i} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                {/* Loop through categories */}
                {Object.keys(filteredCategories).map((category, idx) => (
                    <div key={idx} className="mb-5">
                        {/* Category Heading */}
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                            {category}
                        </h3>

                        {/* Cards Grid */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {filteredCategories[category]
                                // Limit to 4 rooms per category
                                .map((room, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-sm overflow-hidden border hover:shadow-lg transition"
                                    >
                                        {/* Image */}
                                        <Image
                                            src={room.image}
                                            alt={room.name}
                                            width={400}
                                            height={250}
                                            className="w-full h-48 object-cover"
                                        />

                                        {/* Content */}
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold mb-1">
                                                {room.name}
                                            </h3>

                                            {/* Rating */}
                                            <div className="flex items-center text-yellow-500 mb-2">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < Math.round(room.rating)
                                                            ? "fill-yellow-500"
                                                            : ""
                                                            }`}
                                                    />
                                                ))}
                                                <span className="text-sm text-gray-500 ml-2">
                                                    ({room.reviews} reviews)
                                                </span>
                                            </div>

                                            {/* Price */}
                                            <p className="text-lg font-bold text-indigo-600 mb-2">
                                                ₹{room.price.toLocaleString()}
                                            </p>

                                            {/* Location */}
                                            <p className="text-sm text-gray-500 mb-4">
                                                {room.location}
                                            </p>

                                            {/* Button */}
                                            <Link href={`/rooms/${room.id}`}>
                                                <Button className="w-full">View Details</Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
