"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const topBarLinks = [
  { name: "Limited Sales Extended! Exclusive Guarantee!", href: "#" },
  { name: "Discounted Student Rewards Activated for Short Periods", href: "#" },
  { name: "Permanently Marked Moment Savings | Confirmed Option For You", href: "#" },
];

const mainNavLinks = [
  { name: "Shop High School", href: "#" },
  { name: "Shop College", href: "#" },
  { name: "Greek Life", href: "#" },
  { name: "Announcements", href: "#" },
  { name: "Frames", href: "#" },
  { name: "Class Rings", href: "#" },
  { name: "Yearbooks", href: "#" },
  { name: "Customer...", href: "#" },
  { name: "About Herff...", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top announcement bar with scrolling links */}
      <div className="bg-black/80 backdrop-blur-sm border-b border-white/10 py-2 text-center text-xs text-gray-400 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-8">
          {topBarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hidden md:inline hover:text-[#C5A065] transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <span className="md:hidden">Free Shipping on Orders $99+!</span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <span className="text-[#C5A065] text-3xl font-bold">//</span>
              </Link>
            </motion.div>

            {/* Desktop navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {mainNavLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#C5A065] px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side icons */}
            <motion.div 
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="#" className="text-gray-300 hover:text-[#C5A065] transition-colors text-sm hidden sm:inline">
                Lifes
              </Link>
              <button 
                className="text-gray-300 hover:text-[#C5A065] transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button 
                className="text-gray-300 hover:text-[#C5A065] transition-colors"
                aria-label="Shopping bag"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              <button 
                className="lg:hidden text-gray-300 hover:text-[#C5A065] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-black/95 border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {mainNavLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-gray-300 hover:text-[#C5A065] px-3 py-2 text-base font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
