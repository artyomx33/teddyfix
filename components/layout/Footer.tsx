import Link from "next/link";
import { PhoneIcon, MapPinIcon } from "@/components/ui/Icons";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Fleet & Taxi", href: "/fleet-taxi" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                Teddy<span className="text-teddy">Fix</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium auto repair and fleet services in Leiden. Trusted by
              families and professionals.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#maintenance"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Maintenance & Repair
                </Link>
              </li>
              <li>
                <Link
                  href="/services#detailing"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Detailing & Ceramic
                </Link>
              </li>
              <li>
                <Link
                  href="/services#tuning"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Performance & Tuning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPinIcon size={18} className="text-teddy flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Leiden, Netherlands
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={18} className="text-teddy flex-shrink-0" />
                <a
                  href="tel:+31612345678"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +31 6 1234 5678
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/31612345678"
                  className="inline-flex items-center gap-2 text-teddy hover:text-white transition-colors text-sm font-medium mt-2"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TeddyFix. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Part of the{" "}
            <a
              href="https://teddykids.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teddy hover:text-white transition-colors"
            >
              TeddyKids
            </a>{" "}
            family
          </p>
        </div>
      </div>
    </footer>
  );
}
