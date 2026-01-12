"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [ripplePhase, setRipplePhase] = useState(0);

  // Slow ripple animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRipplePhase((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-start overflow-hidden">
      {/* Background image with ripple effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/header.png"
            alt="Graduate celebrating with confetti"
            className="w-full h-full object-cover object-center"
            style={{
              transform: `scale(1.05)`,
            }}
          />
        </motion.div>
        
        {/* Animated ripple overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at ${50 + Math.sin(ripplePhase * 0.02) * 10}% ${50 + Math.cos(ripplePhase * 0.015) * 8}%, 
                rgba(197, 160, 101, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at ${30 + Math.cos(ripplePhase * 0.018) * 15}% ${70 + Math.sin(ripplePhase * 0.012) * 10}%, 
                rgba(255, 215, 0, 0.1) 0%, transparent 40%)
            `,
          }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Bokeh/particle effect overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(197, 160, 101, 0.3) 0%, transparent 50%),
                              radial-gradient(circle at 80% 30%, rgba(255, 215, 0, 0.2) 0%, transparent 40%),
                              radial-gradient(circle at 60% 80%, rgba(197, 160, 101, 0.2) 0%, transparent 45%)`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          {/* Main headline */}
          <motion.h1
            className="font-[var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Top lines - bold italic white */}
            <span className="block font-bold italic text-white">YOU&apos;VE MET</span>
            <span className="block font-bold italic text-white">THE MOMENT.</span>
            
            {/* Bottom lines - light with gradient effect matching image */}
            <motion.span 
              className="block font-light italic mt-2"
              style={{
                background: "linear-gradient(to right, rgba(180, 170, 160, 1), rgba(120, 115, 110, 0.8))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              NOW, IT&apos;S TIME
            </motion.span>
            <motion.span 
              className="block font-light italic"
              style={{
                background: "linear-gradient(to right, rgba(160, 150, 140, 0.9), rgba(100, 95, 90, 0.7))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              TO CELEBRATE.
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-gray-300 text-base md:text-lg mb-8 max-w-lg leading-relaxed font-[var(--font-inter)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          {/* Search input */}
          <motion.div
            className="relative max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for your school or organization"
              className="w-full bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-gray-400 rounded-lg py-4 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-[#C5A065] focus:border-transparent transition-all text-sm"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#C5A065] hover:bg-[#A88A50] text-black p-2.5 rounded-lg transition-colors flex items-center justify-center"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
