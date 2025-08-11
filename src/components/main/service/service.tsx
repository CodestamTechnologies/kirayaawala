"use client";

import { Home, Building2, CalendarClock, MapPin, Users, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
export default function Services() {
 
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-700" />,
      title: "Room Listing & Management",
      description:
        "Easily list, edit, and manage your rental rooms with detailed descriptions, amenities, and images for better visibility."
    },
    {
      icon: <Building2 className="w-12 h-12 text-gray-700" />,
      title: "Property Promotion",
      description:
        "Boost occupancy rates with targeted promotions and featured listings that attract more potential tenants."
    },
    {
      icon: <CalendarClock className="w-12 h-12 text-orange-600" />,
      title: "Reservation & Booking",
      description:
        "Allow tenants to check availability, reserve rooms, and confirm bookings in real-time."
    },
    {
      icon: <MapPin className="w-12 h-12 text-red-600" />,
      title: "Location-Based Search",
      description:
        "Enable renters to find rooms based on their preferred location, landmarks, or transportation options."
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Tenant Management",
      description:
        "Keep track of tenant details, agreements, and history for a smooth rental experience."
    },
    {
      icon: <Wallet className="w-12 h-12 text-purple-600" />,
      title: "Online Rent Collection",
      description:
        "Simplify payments with secure online rent collection, automated reminders, and payment history tracking."
    }
  ];

  return (
    <section className="py-20 bg-[#fcf6f0] pt-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Room Rental Services</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer a complete suite of tools and services to help landlords, property managers, and tenants
            connect effortlessly. From listing your property to collecting rent — we make the process smooth,
            secure, and stress-free.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
