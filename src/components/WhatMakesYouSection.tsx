"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Graduate in cap and gown"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Graduation celebration"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Student celebrating"
  },
];

export default function WhatMakesYouSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-black py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black"></div>
      
      {/* Golden particle effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 70%, rgba(197, 160, 101, 0.4) 0%, transparent 50%),
                            radial-gradient(circle at 70% 30%, rgba(197, 160, 101, 0.3) 0%, transparent 40%)`
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              WHAT MAKES YOU, <span className="text-[#C5A065] italic">YOU?</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 font-[var(--font-inter)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6 font-[var(--font-inter)]">
              Lorem nulla at per dis por el agna psum el ient sque que non velit lacue que et purus.
            </p>
            
            <motion.p 
              className="text-[#C5A065] font-semibold text-xl font-[var(--font-playfair)] italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              #iamworthcelebrating
            </motion.p>
          </motion.div>

          {/* Image carousel */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              {/* Golden glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C5A065]/20 to-[#D4AF37]/20 rounded-lg blur-xl opacity-50"></div>
              
              <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                  <motion.img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.alt}
                    className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: index === currentSlide ? 1 : 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                ))}
                
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
              </div>

              {/* Carousel indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "w-6 bg-white" 
                        : "w-2 bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
