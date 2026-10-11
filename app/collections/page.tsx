"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/nav";
import Footer from "../components/footer";
import CTA from "../components/cta";

interface Product {
  id: string;
  name: string;
  category: "Chandeliers" | "Pendants" | "Sconces" | "Installations";
  collection: "Royal Heritage" | "Contemporary" | "Venetian Murano" | "Minimalist Luxe";
  material: "Optical K9 Crystal" | "Venetian Murano Glass" | "Brushed Brass" | "Smoked Borosilicate" | "24K Gold Filigree";
  availability: "In Stock" | "Made to Order";
  price: string;
  isFeatured: boolean;
  isNew: boolean;
  image: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: "arc-fold-chandelier",
    name: "Arc Fold Crystal Chandelier",
    category: "Chandeliers",
    collection: "Royal Heritage",
    material: "Optical K9 Crystal",
    availability: "Made to Order",
    price: "EUR 7,900",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=1200&auto=format&fit=crop",
    description: "A continuous hand-cut crystal ribbon held around a recessed bronze canopy, creating a radiant luminaire with an uninterrupted edge.",
  },
  {
    id: "cinder-murano-pendant",
    name: "Cinder Murano Luminaire",
    category: "Pendants",
    collection: "Venetian Murano",
    material: "Venetian Murano Glass",
    availability: "In Stock",
    price: "EUR 11,200",
    isFeatured: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1200&auto=format&fit=crop",
    description: "A warm mouth-blown glass shell carried by four smoked-brass blades that become suspension arms and a protective outer frame.",
  },
  {
    id: "field-halo-suspension",
    name: "Field Halo Suspension",
    category: "Chandeliers",
    collection: "Minimalist Luxe",
    material: "Smoked Borosilicate",
    availability: "Made to Order",
    price: "EUR 9,800",
    isFeatured: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=1200&auto=format&fit=crop",
    description: "A freestanding pale-brass lattice carries three precise tiers of ribbed borosilicate tubes without a conventional outer cage.",
  },
  {
    id: "rift-crystal-luminaire",
    name: "Rift Crystal Luminaire",
    category: "Chandeliers",
    collection: "Royal Heritage",
    material: "Optical K9 Crystal",
    availability: "Made to Order",
    price: "EUR 18,400",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
    description: "An elliptical hand-cut crystal crown suspended above two precise fins, creating a pure line of radiant light between structure and shadow.",
  },
  {
    id: "ledger-glass-pendant",
    name: "Ledger Glass Pendant",
    category: "Pendants",
    collection: "Venetian Murano",
    material: "Venetian Murano Glass",
    availability: "In Stock",
    price: "EUR 2,150",
    isFeatured: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1200&auto=format&fit=crop",
    description: "A mouth-blown fluted Venetian glass cylinder with tensioned bronze fittings, designed to balance architectural presence with optical warmth.",
  },
  {
    id: "solstice-cascade-grande",
    name: "Solstice Cascade Grande",
    category: "Installations",
    collection: "Contemporary",
    material: "24K Gold Filigree",
    availability: "Made to Order",
    price: "EUR 28,600",
    isFeatured: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1200&auto=format&fit=crop",
    description: "A spiraling curtain of hand-strung crystal drops that falls organically through double-height staircases and palatial foyers.",
  },
  {
    id: "nocturne-linear-beam",
    name: "Nocturne Linear Beam",
    category: "Pendants",
    collection: "Minimalist Luxe",
    material: "Brushed Brass",
    availability: "In Stock",
    price: "EUR 5,400",
    isFeatured: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
    description: "A directional horizontal luminaire engineered with micro-prism lenses for dining tables and executive conference spaces.",
  },
  {
    id: "fontainebleau-wall-sconce",
    name: "Fontainebleau Crystal Sconce",
    category: "Sconces",
    collection: "Royal Heritage",
    material: "Optical K9 Crystal",
    availability: "In Stock",
    price: "EUR 3,200",
    isFeatured: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1200&auto=format&fit=crop",
    description: "Twin scrolling cast-brass candle arms cradling diamond-faceted crystal spears, reflecting warm candlelight against lime-wash walls.",
  },
  {
    id: "verona-architectural-ring",
    name: "Verona Architectural Ring",
    category: "Chandeliers",
    collection: "Contemporary",
    material: "Brushed Brass",
    availability: "Made to Order",
    price: "EUR 14,800",
    isFeatured: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=1200&auto=format&fit=crop",
    description: "Twin concentric brass rings with inset optical prisms that throw warm, glare-free indirect radiance upwards and downwards.",
  },
];

export default function CollectionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [materialFilter, setMaterialFilter] = useState("All");
  const [collectionFilter, setCollectionFilter] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");
  const [onlyFeatured, setOnlyFeatured] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);

  // Filtered List
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCategory = categoryFilter === "All" || item.category === categoryFilter;
      const matchMaterial = materialFilter === "All" || item.material === materialFilter;
      const matchCollection = collectionFilter === "All" || item.collection === collectionFilter;
      const matchAvailability = availabilityFilter === "All" || item.availability === availabilityFilter;
      const matchFeatured = !onlyFeatured || item.isFeatured;
      const matchNew = !onlyNew || item.isNew;

      return (
        matchSearch &&
        matchCategory &&
        matchMaterial &&
        matchCollection &&
        matchAvailability &&
        matchFeatured &&
        matchNew
      );
    });
  }, [
    searchTerm,
    categoryFilter,
    materialFilter,
    collectionFilter,
    availabilityFilter,
    onlyFeatured,
    onlyNew,
  ]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setCategoryFilter("All");
    setMaterialFilter("All");
    setCollectionFilter("All");
    setAvailabilityFilter("All");
    setOnlyFeatured(false);
    setOnlyNew(false);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-8xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-neutral-200">
          <div className="max-w-xl space-y-3">
            <span className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400">
              OBJECT REGISTRY / {PRODUCTS.length} PIECES
            </span>
            <h1 className="font-instrument text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-neutral-950 leading-[1.03]">
              Products
            </h1>
            <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed pt-1">
              Search and filter the complete KORVAE catalogue. Every piece is documented
              with dimensions, finish options, lead time, and a direct enquiry path.
            </p>
          </div>

          {/* Right Stat Box */}
          <div className="text-left md:text-right md:border-l md:border-neutral-200 md:pl-8 pt-2 md:pt-0">
            <span className="block font-instrument text-6xl md:text-7xl font-normal text-neutral-950 leading-none">
              {PRODUCTS.length}
            </span>
            <span className="block text-[11px] text-neutral-400 pt-2 font-normal max-w-[170px] md:ml-auto">
              Original objects across four catalogue categories
            </span>
          </div>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="py-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div>
              <label className="block text-[11px] text-neutral-500 font-medium mb-1.5">
                Search
              </label>
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-[11px] text-neutral-500 font-medium mb-1.5">
                Category
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
              >
                <option value="All">All</option>
                <option value="Chandeliers">Chandeliers</option>
                <option value="Pendants">Pendants</option>
                <option value="Sconces">Sconces</option>
                <option value="Installations">Installations</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Primary Material */}
            <div>
              <label className="block text-[11px] text-neutral-500 font-medium mb-1.5">
                Primary Material
              </label>
              <select
                value={materialFilter}
                onChange={(e) => setMaterialFilter(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
              >
                <option value="All">All</option>
                <option value="Optical K9 Crystal">Optical K9 Crystal</option>
                <option value="Venetian Murano Glass">Venetian Murano Glass</option>
                <option value="Brushed Brass">Brushed Brass</option>
                <option value="Smoked Borosilicate">Smoked Borosilicate</option>
                <option value="24K Gold Filigree">24K Gold Filigree</option>
              </select>
            </div>

            {/* Collection */}
            <div>
              <label className="block text-[11px] text-neutral-500 font-medium mb-1.5">
                Collection
              </label>
              <select
                value={collectionFilter}
                onChange={(e) => setCollectionFilter(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
              >
                <option value="All">All</option>
                <option value="Royal Heritage">Royal Heritage</option>
                <option value="Contemporary">Contemporary</option>
                <option value="Venetian Murano">Venetian Murano</option>
                <option value="Minimalist Luxe">Minimalist Luxe</option>
              </select>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-[11px] text-neutral-500 font-medium mb-1.5">
                Availability
              </label>
              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors cursor-pointer"
              >
                <option value="All">All</option>
                <option value="In Stock">In Stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>

          {/* Checkboxes & Reset Button Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-6 text-xs text-neutral-700">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyFeatured}
                  onChange={(e) => setOnlyFeatured(e.target.checked)}
                  className="rounded-none border-neutral-300 text-neutral-900 focus:ring-0"
                />
                <span>Featured</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={onlyNew}
                  onChange={(e) => setOnlyNew(e.target.checked)}
                  className="rounded-none border-neutral-300 text-neutral-900 focus:ring-0"
                />
                <span>New Pieces</span>
              </label>
            </div>

            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 text-xs font-medium text-neutral-800 border border-neutral-300 hover:border-black hover:text-black transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* REGISTRY SECTION HEADER */}
        <div className="flex items-center justify-between pt-8 pb-6 border-t border-neutral-200">
          <h2 className="font-instrument text-2xl sm:text-3xl font-normal text-neutral-950 tracking-tight">
            Complete Registry
          </h2>
          <span className="text-xs text-neutral-400 font-normal">
            Results update as filters change ({filteredProducts.length} items)
          </span>
        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-neutral-200 my-4">
            <p className="text-sm text-neutral-500">No objects match your filter selection.</p>
            <button
              onClick={handleResetFilters}
              className="mt-3 text-xs underline underline-offset-4 text-neutral-900 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 pt-2">
            {filteredProducts.map((item) => (
              <Link
                href="/productslug"
                key={item.id}
                className="group flex flex-col cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/4.5] w-full bg-neutral-100 overflow-hidden mb-5">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {item.isNew && (
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-white text-[10px] font-mono uppercase tracking-wider text-neutral-900 border border-neutral-200">
                      New
                    </span>
                  )}
                </div>

                {/* Category */}
                <div className="flex items-center justify-between text-xs text-neutral-500 font-normal mb-1.5">
                  <span>{item.category}</span>
                </div>

                {/* Product Title */}
                <h3 className="font-instrument text-2xl sm:text-[28px] font-normal text-neutral-950 tracking-tight mb-2 group-hover:opacity-75 transition-opacity">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        )}
      </main>

      <CTA />

      <Footer />
    </div>
  );
}
