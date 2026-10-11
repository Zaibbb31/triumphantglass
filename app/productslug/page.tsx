"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/nav";
import CTA from "../components/cta";
import Footer from "../components/footer";
import { PRODUCT_DATA } from "../data/products";

export default function ProductDetailPage() {
  const product = PRODUCT_DATA;

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. TOP HERO SECTION (SCREEN HEIGHT & END-TO-END LEFT, TOP, BOTTOM) */}
        <section className="relative w-full min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-stretch border-b border-neutral-200 overflow-hidden">
          {/* Left Studio Image: End-to-end to Left, Top, and Bottom */}
          <div className="w-full lg:w-[52%] xl:w-[50%] relative min-h-[460px] sm:min-h-[540px] lg:min-h-full bg-neutral-100">
            <Image
              src={product.heroImage}
              alt={product.name}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          </div>

          {/* Right Product Intro Details */}
          <div className="w-full lg:w-[48%] xl:w-[50%] flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-16 xl:px-24 py-12 lg:py-0 z-10">
            <div className="max-w-xl space-y-7">
              {/* Breadcrumb */}
              <span className="block text-xs font-normal text-neutral-500 tracking-wide">
                {product.breadcrumb}
              </span>

              {/* Title */}
              <h1 className="font-instrument text-4xl sm:text-5xl md:text-6xl xl:text-[68px] font-normal tracking-tight text-neutral-950 leading-[1.04]">
                {product.name}
              </h1>

              {/* Tagline / Subtitle */}
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                {product.tagline}
              </p>

              {/* Availability without price */}
              <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  Production Status
                </span>
                <span className="text-xs font-medium text-neutral-900 tracking-wide">
                  {product.availability}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#enquire"
                  className="px-7 py-3.5 bg-neutral-950 text-white text-sm font-medium hover:bg-neutral-800 transition-colors duration-200 text-center"
                >
                  Enquire About This Piece
                </a>
                <a
                  href="#specifications"
                  className="px-7 py-3.5 bg-white text-neutral-900 border border-neutral-300 hover:border-black transition-colors duration-200 text-sm font-medium text-center"
                >
                  View Specifications
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 2x2 GRID OF IMAGES (END-TO-END FROM LEFT AND RIGHT) */}
        <section className="w-full pt-16 sm:pt-20 lg:pt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 w-full">
            {product.gridImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-neutral-100 overflow-hidden"
              >
                <Image
                  src={imgUrl}
                  alt={`${product.name} detail view ${idx + 1}`}
                  fill
                  className="object-cover object-center hover:scale-103 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 3. FULL-WIDTH END-TO-END IMAGE */}
        <section className="w-full pt-1 sm:pt-2">
          <div className="relative w-full h-[65vh] sm:h-[85vh] bg-neutral-100 overflow-hidden">
            <Image
              src={product.fullWidthImage}
              alt={`${product.name} in architectural room setting`}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </section>

        {/* 4. OBJECT NOTES / SPECIFICATIONS SECTION */}
        <section
          id="specifications"
          className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-t border-neutral-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <span className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                OBJECT NOTES
              </span>

              <h2 className="font-instrument text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-neutral-950 leading-[1.06]">
                {product.objectNotes.heading}
              </h2>

              <div className="space-y-4 text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-normal pt-2">
                {product.objectNotes.description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Specifications Table */}
            <div className="lg:col-span-6 border-t lg:border-t-0 border-neutral-200">
              <div className="divide-y divide-neutral-200 text-xs sm:text-[13px]">
                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="text-neutral-500 font-normal">Product Type</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {product.objectNotes.specs.productType}
                  </span>
                </div>

                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="text-neutral-500 font-normal">Dimensions</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {product.objectNotes.specs.dimensions}
                  </span>
                </div>

                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="text-neutral-500 font-normal">Weight</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {product.objectNotes.specs.weight}
                  </span>
                </div>

                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="text-neutral-500 font-normal">Finish</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {product.objectNotes.specs.finish}
                  </span>
                </div>

                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="text-neutral-500 font-normal">Lead Time</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {product.objectNotes.specs.leadTime}
                  </span>
                </div>

                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="text-neutral-500 font-normal">Designer</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {product.objectNotes.specs.designer}
                  </span>
                </div>

                <div className="py-4 grid grid-cols-3 gap-4">
                  <span className="text-neutral-500 font-normal">Year</span>
                  <span className="col-span-2 text-neutral-900 font-normal">
                    {product.objectNotes.specs.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. MATERIAL / METHOD SECTION */}
        <section className="max-w-8xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-t border-neutral-200">
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-3">
              <span className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400">
                MATERIAL / METHOD
              </span>
              <h2 className="font-instrument text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-neutral-950 leading-[1.06]">
                {product.materialMethod.heading}
              </h2>
            </div>

            {/* 2-Column Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-6 border-t border-neutral-200">
              {/* Left Column: Materials + Finish */}
              <div className="space-y-4">
                <span className="block text-xs font-mono uppercase tracking-wider text-neutral-900 font-semibold">
                  MATERIALS + FINISH
                </span>
                <div className="space-y-3 text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {product.materialMethod.materialsFinish.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Right Column: Production Method */}
              <div className="space-y-4">
                <span className="block text-xs font-mono uppercase tracking-wider text-neutral-900 font-semibold">
                  PRODUCTION METHOD
                </span>
                <div className="space-y-3 text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {product.materialMethod.productionMethod.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA SECTION */}
        <CTA />
      </main>

      {/* 7. FOOTER */}
      <Footer />
    </div>
  );
}
