"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase text-black hover:opacity-80 transition-opacity"
        >
          KORVAE
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] text-black  font-normal transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#enquire"
            className="px-6 py-2.5 text-sm font-medium text-neutral-900 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-all duration-200"
          >
            Enquire
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#enquire"
            className="px-4 py-1.5 text-xs font-medium text-neutral-900 border border-neutral-300 hover:border-black transition-all"
          >
            Enquire
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-black transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-neutral-800 hover:text-black transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#enquire"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-2.5 text-sm font-medium text-neutral-900 border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-all"
            >
              Enquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
