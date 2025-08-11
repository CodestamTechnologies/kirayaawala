"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function Explore() {
    const floors = [
        { name: "Floor 1", img: "/choose1.jpg" },
        { name: "Floor 2", img: "/choose2.jpg" },
        { name: "Floor 3", img: "/herobg.jpg" },
    ];

    const [selected, setSelected] = useState(0);

    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center ">
                Explore every level of the property <br /> with our floor Visualizer.
            </h2>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col lg:flex-row gap-6 p-6">
                {/* Left Navigation */}
                <div className="flex flex-row md:flex-col gap-2 lg:min-w-[120px] flex-wrap justify-center md:justify-start">
                    {floors.map((floor, idx) => (
                        <Button
                            key={floor.name}
                            variant={idx === selected ? "default" : "outline"}
                            className="justify-between min-w-[100px] lg:min-w-full"
                            onClick={() => setSelected(idx)}
                        >
                            {floor.name} <span>→</span>
                        </Button>
                    ))}
                </div>

                {/* Floor Image */}
                <div className="flex-1 flex justify-center items-center min-w-0">
                    <Image
                        src={floors[selected].img}
                        alt={floors[selected].name}
                        width={500}
                        height={500}
                        className="rounded-lg object-cover max-w-full h-auto"
                        priority
                    />
                </div>

                {/* Property Info */}
                <div className="flex-1 flex flex-col justify-center gap-4 min-w-0">
                    <p className="text-gray-600 text-center md:text-left">
                        The living room is the heart of the home—a space designed for comfort,
                        relaxation, and gathering. It typically features seating like sofas or armchairs,
                        a coffee table, and often a TV or entertainment unit.
                    </p>
                    <ul className="text-gray-700 space-y-1 text-center md:text-left">
                        <li>• <b>Apartment:</b> 4</li>
                        <li>• <b>Address:</b> VA, Boston Tower, NYC</li>
                        <li>• <b>Architecture:</b> Ronald Dowson</li>
                        <li>• <b>Available:</b> Kitchen, Balcony, Dining, Bedroom, Storage</li>
                        <li>• <b>Size:</b> 2200 Sqf.</li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
                        <Button className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
                            Book A Visit
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto">
                            Enquire
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
