import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">KirayaaWala</h2>
          <p className="text-gray-300 mb-6 max-w-md">
            Let’s help you find the perfect property or get top value for the one you own.
          </p>

          <div className="space-y-3">
            <p className="text-2xl font-semibold">+123 456 789 00</p>
            <p className="text-lg text-gray-200">info@onearc.com</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            {["facebook", "twitter", "linkedin", "youtube"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition"
                aria-label={icon}
              >
                <span className="sr-only">{icon}</span>
                <i className={`ri-${icon}-line`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full max-w-md mx-auto md:mx-0">
          <img
            src="/choose1.jpg"
            alt="bedroom"
            className="rounded-xl w-full h-[300px] object-cover"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6 text-sm text-gray-500 gap-4 md:gap-0">
        <p className="text-center md:text-left w-full md:w-auto">
          Copyright and design by ©Codestem — 2025
        </p>
        <ul className="flex flex-wrap justify-center md:justify-start space-x-6">
          <li>
            <Link href="#">
              <p className="hover:text-white">About Us</p>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p className="hover:text-white">Properties</p>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p className="hover:text-white">Planning</p>
            </Link>
          </li>
          <li>
            <Link href="#">
              <p className="hover:text-white">404</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
