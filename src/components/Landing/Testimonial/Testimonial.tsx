export default function Testimonial() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-8">
          Home—a space designed for comfort
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Rating Card */}
          <div className="p-6 border rounded-lg flex flex-col items-start">
            <div className="flex -space-x-2 mb-3">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/40?img=${i + 1}`}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-2xl font-bold">4.9 / 5.0</p>
            <p className="text-sm text-gray-500">It’s not a rating, it’s a Trust</p>
          </div>

          {/* Image + Author */}
          <div className="relative rounded-lg overflow-hidden group">
            <img
              src="/choose1.jpg"
              alt="house"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
              <p>Alonso D. Dowson</p>
              <p className="text-xs">House Owner</p>
            </div>
          </div>

          {/* Quote Card */}
          <div className="p-6 border rounded-lg bg-black text-white">
            <p className="mb-4 text-sm">
              &quot;It is a miracle that I landed up in this site, it gave me a hope
              to find a dream home for my family, and I thank the service it
              provided.&quot;
            </p>
            <p className="text-sm font-semibold">Alonso D. Dowson</p>
            <p className="text-xs text-gray-400">House Owner</p>
          </div>

          {/* Large Image & Quote */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/choose2.jpg"
              alt="modern house"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
              <p className="text-3xl font-bold">90.8%</p>
              <p className="text-sm">On average for home owner cost savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
