"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="bg-white text-gray-800 font-sans pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-100 to-pink-100 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We’re passionate about creating exceptional experiences, blending
          creativity, technology, and purpose to make a difference.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/choose1.jpg"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to innovate, inspire, and empower. We strive to
              deliver solutions that not only meet needs but also exceed
              expectations — pushing boundaries and setting new standards.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe in fostering a culture of growth, inclusivity, and
              creativity where every voice matters and every idea has the
              potential to change the world.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Innovation",
              desc: "We constantly seek new ways to improve and bring creative solutions to the table.",
              icon: "💡",
            },
            {
              title: "Integrity",
              desc: "We are committed to transparency, honesty, and doing what’s right.",
              icon: "🤝",
            },
            {
              title: "Excellence",
              desc: "We hold ourselves to the highest standards in everything we do.",
              icon: "🏆",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { name: "Alex Carter", role: "CEO", img: "/choose1.jpg" },
            { name: "Sofia Lee", role: "CTO", img: "/choose1.jpg" },
            { name: "Daniel Kim", role: "Designer", img: "/choose1.jpg" },
            { name: "Priya Singh", role: "Developer", img: "/choose1.jpg" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={400}
                className="object-cover w-full h-56"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-100 to-pink-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="max-w-xl mx-auto text-gray-700 mb-6">
          Whether you’re looking to collaborate, join our team, or learn more
          about what we do, we’d love to connect with you.
        </p>
        <Button className="px-6 py-3 text-lg rounded-full">
          Contact Us
        </Button>
      </section>
    </main>
  );
}
