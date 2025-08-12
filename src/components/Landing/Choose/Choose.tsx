"use client";

import Image from "next/image";

export default function Choose() {
  return (
    <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left - Image */}
      <div className="relative w-full h-[400px] rounded-tl-[150px] overflow-hidden">
        <Image
          src="/choose1.jpg"
          alt="Construction site"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right - Content */}
      <div className="flex flex-col gap-6">
        

        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          Why Choose us for best construction experience
        </h2>

        {/* Feature 1 */}
        <div className="flex items-start gap-4">
          <div className="bg-cyan-500 text-white font-bold rounded-md px-3 py-1 text-lg">
            01
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 text-white font-bold rounded-md px-3 py-1 text-lg">
            02
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-cyan-500 text-white font-bold rounded-md px-3 py-1 text-lg">
            03
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 text-white font-bold rounded-md px-3 py-1 text-lg">
            04
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.
          </p>
        </div>
      </div>
    </section>
  );
}
