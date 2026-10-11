import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white  pt-20 pb-12 px-6 sm:px-10 lg:px-16 text-neutral-800 text-xs sm:text-[13px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase text-black hover:opacity-80 transition-opacity inline-block"
            >
              TRIUMPHANT GLASS
            </Link>

            <p className="text-neutral-600 text-sm leading-relaxed max-w-xs font-normal">
              Objects for rooms with a long memory.
            </p>

            <div className="text-neutral-500 text-xs leading-relaxed font-normal pt-2 space-y-1">
              <p>Handcrafted chandeliers made to order in India.</p>
              <p>Worldwide project enquiries welcome.</p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2 space-y-4">
            <span className="block text-neutral-400 font-medium">Explore</span>
            <ul className="space-y-3 font-normal text-neutral-800">
              <li>
                <a href="#products" className="hover:text-black transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-black transition-colors">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-black transition-colors">
                  Journal
                </a>
              </li>
              <li>
                <a href="#trade" className="hover:text-black transition-colors">
                  Trade
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Visit & Enquire with Real Business Address */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-neutral-400 font-medium">Visit & Enquire</span>
            <ul className="space-y-3 font-normal text-neutral-800">
              <li>
                <a href="#contact" className="hover:text-black transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-black transition-colors">
                  Book a Private Consultation
                </a>
              </li>
              <li>
                <a href="#materials" className="hover:text-black transition-colors">
                  Request Material Samples
                </a>
              </li>
              <li className="pt-2 text-neutral-500 leading-relaxed max-w-xs">
                <span>84, Mohalla Kotla, Gali No. 5, Firozabad, Uttar Pradesh 283203, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Direct Inquiries */}
          <div className="lg:col-span-3 space-y-4">
            <span className="block text-neutral-400 font-medium">Legal</span>
            <ul className="space-y-3 font-normal text-neutral-800">
              <li>
                <a href="#privacy" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-black transition-colors">
                  Terms
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:studio@triumphantglass.com"
                  className="hover:text-black transition-colors block text-neutral-700"
                >
                  studio@triumphantglass.com
                </a>
              </li>
              <li>
                <span className="text-neutral-700 block">+91 (0) 5612 242 811</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-normal">
          <div>
            © 2026 TRIUMPHANT GLASS. All rights reserved.
          </div>
          <div className="text-neutral-400">
            Firozabad Glassmaking Heritage — Made in India
          </div>
        </div>
      </div>
    </footer>
  );
}
