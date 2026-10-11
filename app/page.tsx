"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/nav";
import DraggableGallery from "./components/draggable-gallery";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function Page() {
  const selectedPiecesRef = useRef<HTMLDivElement>(null);
  const [selectedPiecesProgress, setSelectedPiecesProgress] = useState(0);

  const collectionsRef = useRef<HTMLDivElement>(null);
  const [collectionsProgress, setCollectionsProgress] = useState(0);

  const handleSelectedPiecesScroll = () => {
    const el = selectedPiecesRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const pct = Math.min(Math.max((el.scrollLeft / maxScroll) * 100, 0), 100);
    setSelectedPiecesProgress(pct);
  };

  const handleCollectionsScroll = () => {
    const el = collectionsRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;
    const pct = Math.min(Math.max((el.scrollLeft / maxScroll) * 100, 0), 100);
    setCollectionsProgress(pct);
  };
  const selectedPieces = [
    {
      id: "rift-luminaire",
      category: "Elliptical Chandelier",
      price: "EUR 18,400",
      title: "Rift Crystal Luminaire",
      description:
        "An elliptical hand-cut crystal crown suspended above two precise fins, creating a pure line of radiant light between structure and shadow.",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
      alt: "Rift Crystal Luminaire",
    },
    {
      id: "ledger-pendant",
      category: "Sculptural Pendant",
      price: "EUR 2,150",
      title: "Ledger Glass Pendant",
      description:
        "A mouth-blown fluted Venetian glass cylinder with tensioned bronze fittings, designed to balance architectural presence with optical warmth.",
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
      alt: "Ledger Glass Pendant",
    },
    {
      id: "relay-suspension",
      category: "Linear Suspension",
      price: "EUR 12,600",
      title: "Relay Halo Suspension",
      description:
        "A continuous geometric ring of optical crystal battens with an inset dimming rail, calibrated for dining salons and focused architectural spaces.",
      image:
        "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=1200&auto=format&fit=crop",
      alt: "Relay Halo Suspension",
    },
  ];

  const collections = [
    {
      id: "chandeliers",
      title: "Chandeliers",
      description:
        "Monumental, multi-tier, and cascading crystal luminaires for high ceilings, double-height foyers, and palatial reception rooms.",
      image:
        "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=1200&auto=format&fit=crop",
      alt: "Monumental crystal chandeliers",
    },
    {
      id: "pendants",
      title: "Pendants",
      description:
        "Mouth-blown Venetian glass and linear suspensions designed for dining tables, kitchen islands, and intimate salons.",
      image:
        "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1200&auto=format&fit=crop",
      alt: "Sculptural glass pendants",
    },
    {
      id: "bespoke-installations",
      title: "Installations",
      description:
        "Custom architectural lighting sculptures and tailored glass installations engineered for private residences and hotels.",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
      alt: "Bespoke architectural installations",
    },
  ];

  const materials = [
    {
      num: "01",
      title: "Optical K9 Crystal",
      description:
        "Lead-free crystal prisms diamond-cut and flame-polished for flawless light dispersion and radiant rainbow refractions.",
    },
    {
      num: "02",
      title: "Venetian Murano Glass",
      description:
        "Mouth-blown soda glass formed while molten, capturing organic flow and soft ambient warmth across each petal.",
    },
    {
      num: "03",
      title: "Brushed Champagne Brass",
      description:
        "Solid cast brass with directional brushwork and a subtle satin protective lacquer that resists oxidization.",
    },
    {
      num: "04",
      title: "Smoked Borosilicate",
      description:
        "Fluted architectural glass with a warm charcoal tint to soften high-output illumination into gentle ambient glow.",
    },
    {
      num: "05",
      title: "24K Gold Leaf Filigree",
      description:
        "Genuine gold leaf gilding hand-applied by master artisans to internal armatures, reflecting warm candlelight.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col">
      {/* Navbar Component */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-stretch border-b border-neutral-200 overflow-hidden">
        {/* Left Content Column */}
        <div className="w-full lg:w-[45%] xl:w-[42%] flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-16 xl:px-24 py-12 lg:py-0 z-10">
          <div className="max-w-xl space-y-7">
            {/* Eyebrow Label */}
            <span className="block text-[13px] text-black font-medium tracking-wide">
              Made to order in India
            </span>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[80px] font-normal tracking-tight text-neutral-950 leading-[1.04]">
              Luminous glass, <br />
              sculpted in light.
            </h1>

            {/* Paragraph Description */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal pt-1 max-w-lg">
              Chandeliers, pendants, and luminaires shaped by proportion, crystal
              clarity, and the spaces they illuminate. Built in small production
              runs and finished by hand.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link
                href="#products"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-neutral-950 text-white text-sm font-medium hover:bg-neutral-800 transition-colors duration-200 text-center"
              >
                Explore the Collection
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 transition-colors duration-200 text-sm font-medium text-center"
              >
                Our Making Process
              </Link>
            </div>
          </div>
        </div>

        {/* Right Architectural Image Column */}
        <div className="w-full lg:w-[55%] xl:w-[58%] relative min-h-[480px] sm:min-h-[560px] lg:min-h-full bg-neutral-100">
          <Image
            src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1920&auto=format&fit=crop"
            alt="Handcrafted architectural chandelier in minimalist contemporary interior"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      </section>

      {/* SELECTED PIECES SECTION */}
      <section id="products" className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-14 lg:mb-16">
            <div className="max-w-2xl space-y-3">
              <span className="block text-[13px] text-neutral-500 font-medium tracking-wide">
                Selected pieces
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-neutral-950 leading-[1.08]">
                Glass, reduced to what the object needs.
              </h2>
              <div className="pt-2">
                <Link
                  href="/collections"
                  className="text-xs uppercase tracking-wider font-medium text-neutral-900 underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  View All
                </Link>
              </div>
            </div>

            <div className="md:max-w-xs lg:max-w-sm">
              <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed pt-1">
                A changing selection from the current collection, documented by
                material, method, dimensions, and lead time.
              </p>
            </div>
          </div>

          {/* Horizontal Draggable Carousel on Mobile / 3-Column Grid on Desktop */}
          <div
            ref={selectedPiecesRef}
            onScroll={handleSelectedPiecesScroll}
            className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-5 pb-4 md:grid md:grid-cols-3 md:gap-8 lg:gap-4 md:pb-0 -mx-6 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0"
          >
            {selectedPieces.map((piece) => (
              <Link
                href="/productslug"
                key={piece.id}
                className="group flex flex-col cursor-pointer flex-shrink-0 w-[80vw] sm:w-[320px] snap-start md:w-auto md:flex-shrink"
              >
                {/* Product Image Box */}
                <div className="relative aspect-[4/4.5] w-full bg-neutral-100 overflow-hidden mb-5">
                  <Image
                    src={piece.image}
                    alt={piece.alt}
                    fill
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 80vw, 33vw"
                  />
                </div>

                {/* Meta details: Category */}
                <div className="flex items-center justify-between text-xs text-neutral-500 font-normal mb-1.5">
                  <span>{piece.category}</span>
                </div>

                {/* Product Title */}
                <h3 className="font-instrument text-2xl sm:text-[28px] font-normal text-neutral-950 tracking-tight mb-2 group-hover:opacity-75 transition-opacity">
                  {piece.title}
                </h3>

                {/* Product Description */}
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {piece.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Progress Bar for Mobile Carousel */}
          <div className="md:hidden mt-6 w-full max-w-[160px] mx-auto h-[2px] bg-neutral-200 overflow-hidden rounded-full">
            <div
              className="h-full bg-neutral-900 transition-all duration-150 ease-out rounded-full"
              style={{ width: `${Math.max(selectedPiecesProgress, 33.3)}%` }}
            />
          </div>
        </div>
      </section>

      {/* DRAGGABLE GALLERY SECTION */}
      <DraggableGallery />

      {/* COLLECTIONS SECTION */}
      <section id="collections" className="py-8 lg:py-26 px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="font-instrument text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-neutral-950 leading-[1.08] mb-12 lg:mb-14">
            For dining, living, and grand spaces.
          </h2>

          {/* Horizontal Draggable Carousel on Mobile / 3-Column Grid on Desktop */}
          <div
            ref={collectionsRef}
            onScroll={handleCollectionsScroll}
            className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-5 pb-4 md:grid md:grid-cols-3 md:gap-8 lg:gap-6 md:pb-0 -mx-6 px-6 sm:-mx-10 sm:px-10 md:mx-0 md:px-0"
          >
            {collections.map((item) => (
              <Link
                href="/collections"
                key={item.id}
                className="group flex flex-col cursor-pointer flex-shrink-0 w-[80vw] sm:w-[320px] snap-start md:w-auto md:flex-shrink"
              >
                {/* Collection Image */}
                <div className="relative aspect-[4/4.5] w-full bg-neutral-100 overflow-hidden mb-5">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 80vw, 33vw"
                  />
                </div>

                {/* Collection Title */}
                <h3 className="font-instrument text-2xl sm:text-[30px] font-normal text-neutral-950 tracking-tight mb-2 group-hover:opacity-75 transition-opacity">
                  {item.title}
                </h3>

                {/* Collection Description */}
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Progress Bar for Mobile Carousel */}
          <div className="md:hidden mt-6 w-full max-w-[160px] mx-auto h-[2px] bg-neutral-200 overflow-hidden rounded-full">
            <div
              className="h-full bg-neutral-900 transition-all duration-150 ease-out rounded-full"
              style={{ width: `${Math.max(collectionsProgress, 33.3)}%` }}
            />
          </div>
        </div>
      </section>

      {/* MATERIAL LIBRARY SECTION */}
      <section id="materials" className="py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 lg:mb-16">
            <div className="space-y-3">
              <span className="block text-[13px] text-neutral-500 font-medium tracking-wide">
                Material library
              </span>
              <h2 className="font-instrument text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-neutral-950 leading-[1.08]">
                Five expressions of glass & brass.
              </h2>
            </div>
            <div className="md:max-w-xs lg:max-w-sm">
              <p className="text-neutral-500 text-xs sm:text-[13px] leading-relaxed pt-1">
                The palette stays deliberately narrow so refraction, finish, texture, and facet can do the visual work.
              </p>
            </div>
          </div>

          {/* 5-Column Material Breakdown with vertical dividers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-neutral-200 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            {materials.map((mat) => (
              <div
                key={mat.num}
                className="py-8 lg:py-10 px-0 lg:px-6 xl:px-8 first:lg:pl-0 last:lg:pr-0 space-y-3"
              >
                <span className="block text-xs font-mono text-neutral-400">
                  {mat.num}
                </span>
                <h3 className="text-sm font-semibold text-neutral-950 tracking-tight">
                  {mat.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {mat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <CTA />

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}
