"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Bolanle", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const MainHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const panelBaseClasses =
    "absolute inset-x-0 top-full mt-3 overflow-hidden rounded-xl border border-white/25 bg-gradient-to-b from-[#f15b2a]/95 to-[#f86b2a]/95 text-sm font-medium text-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-md md:hidden transition-all duration-300";

  const panelStateClasses = isOpen
    ? "max-h-80 opacity-100 translate-y-0"
    : "max-h-0 opacity-0 -translate-y-2 pointer-events-none";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-30 flex justify-center px-4">
      <div className="pointer-events-auto relative flex h-20 w-full max-w-[1880px] items-center justify-between rounded-[10px] border border-white/40 bg-white/0 backdrop-blur-sm px-6 md:px-12 shadow-[0_18px_40px_rgba(0,0,0,0.35)] text-white">
        <div className="flex items-center gap-3 pointer-events-auto">
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="Bolanle Afrika"
              width={105}
              height={30}
              priority
            />
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-[60px] text-xs font-medium text-white/90 md:flex md:ml-auto">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={toggleMenu}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-md md:hidden cursor-pointer"
        >
          <span className="flex h-3 w-3 flex-col justify-between">
            <span
              className={`block h-[2px] w-full rounded-full bg-black transition-transform duration-200 ${
                isOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-black transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-black transition-transform duration-200 ${
                isOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {/* Mobile dropdown panel */}
        <div className={`${panelBaseClasses} ${panelStateClasses}`}>
          <nav className="flex flex-col divide-y divide-white/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-5 py-3.5 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
