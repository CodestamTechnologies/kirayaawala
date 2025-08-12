"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className=" py-20 flex flex-col gap-20 px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-wide">People&apos;s Choice</p>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Take a detailed look at this top rated interior.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-xl">
          Our award-winning designs blend elegance and functionality to bring your dream spaces to life. See why thousands trust us to transform their homes with passion and precision.
        </p>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg max-w-4xl aspect-[1200/2000] sm:aspect-[1200/800]">
          <Image
            src="/herobg.jpg"
            alt="Top Rated Interior"
            fill
            className="object-cover "
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 1200px "
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 bg-black/30 text-white backdrop-blur-sm">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 max-w-lg">
              Experience Top Rated Interiors
            </h1>
            <p className="mb-6 max-w-md text-center leading-relaxed">
              Discover the perfect blend of style and comfort with our custom interior designs. Every detail crafted to suit your unique taste.
            </p>
            <Link href="/rooms">
              <Button variant={'secondary'} className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                Explore Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section (Map + Info) */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 rounded-2xl overflow-hidden shadow-lg w-full aspect-[16/9] relative">
          <Image
            src="/map.png"
            alt="Map showing locations"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 800px"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col gap-6 max-w-lg">
          <h3 className="text-2xl font-bold">Our Service Locations</h3>
          <p className="text-gray-700 leading-relaxed">
            We proudly serve clients across multiple cities, offering personalized design consultations and on-site services. Our local experts ensure that your vision becomes reality, wherever you are.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Personalized Consultations:</strong> Tailored advice to fit your style and budget.</li>
            <li><strong>On-site Measurements:</strong> Precision is key—our team visits your space to ensure a perfect fit.</li>
            <li><strong>Timely Delivery:</strong> We work efficiently to meet your deadlines without compromising quality.</li>
            <li><strong>Post-installation Support:</strong> We’re here to help with any questions or adjustments after completion.</li>
          </ul>

          <Link href={"/contact"} className="cursor-pointer">
            <Button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition w-full sm:w-auto">
              Contact Our Team
            </Button></Link>
        </div>
      </div>
    </section>
  );
}
