"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Main header links
const mainNavLinks = [
  { name: "Shop High School", href: "#" },
  { name: "Shop College", href: "#" },
  { name: "Shop Greek", href: "#" },
  { name: "Order Status", href: "#" },
  { name: "Help", href: "#" },
  { name: "Working With Us", href: "#" },
];

// Secondary category menu links
const categoryLinks = [
  { name: "Graduation", href: "#" },
  { name: "Cap & Gown", href: "#" },
  { name: "Rings & Jewelry", href: "#" },
  { name: "Greek Life", href: "#" },
  { name: "Announcements", href: "#" },
  { name: "Frames", href: "#" },
  { name: "Champ Rings & Cheer", href: "#" },
  { name: "Medals & Awards", href: "#" },
  { name: "Letter Jackets & Apparel", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Main navigation */}
      <nav className="sticky top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
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

            {/* Desktop navigation - Main Links */}
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
              {/* Account Icon */}
              <button 
                className="text-gray-300 hover:text-[#C5A065] transition-colors"
                aria-label="Account"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              {/* Cart Icon */}
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

        {/* Secondary Category Menu - Desktop */}
        <div className="hidden lg:block bg-black/70 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-6 h-10">
              {categoryLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C5A065] text-xs font-medium transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
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
                {/* Main Links */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-3">Main Menu</p>
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
                {/* Category Links */}
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-3">Categories</p>
                  {categoryLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: (mainNavLinks.length + index) * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="block text-gray-400 hover:text-[#C5A065] px-3 py-2 text-sm transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
