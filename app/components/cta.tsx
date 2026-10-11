import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="enquire" className="py-24 sm:py-8 lg:py-12 px-6 sm:px-10 lg:px-16 bg-white ">
      <div className="max-w-4xl mx-auto text-center space-y-7">
        {/* Main Headline */}
        <h2 className="font-instrument text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight text-neutral-950 leading-[1.06]">
          Begin with the room, the object, or the material.
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-neutral-600 text-sm sm:text-[15px] md:text-base leading-relaxed max-w-xl mx-auto font-normal">
          Tell us what the piece needs to do, where it will live, and which dimensions
          or finishes matter. We will respond with the relevant options and next steps.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <Link
            href="#pricing"
            className="w-full sm:w-auto px-8 py-3.5 bg-neutral-950 text-white text-sm font-medium hover:bg-neutral-800 transition-colors duration-200 text-center"
          >
            Request Pricing
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-950 transition-colors duration-200 text-sm font-medium text-center"
          >
            Contact the Trade Team
          </Link>
        </div>
      </div>
    </section>
  );
}
