"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JourneySection() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            You&apos;re worth celebrating. Choose your journey.
          </h2>
          
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 text-sm md:text-base">
            <span className="text-gray-500">Based on your failures</span>
            <span className="text-gray-400">-</span>
            <span className="text-gray-400">Moments</span>
          </div>
        </motion.div>

        {/* Product icons row */}
        <motion.div
          className="flex justify-center gap-8 md:gap-16 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { name: "Cap and gown", icon: "🎓" },
            { name: "Announcements", icon: "📜" },
            { name: "Class rings", icon: "💍" },
            { name: "Frames", icon: "🖼️" },
            { name: "Letter jackets", icon: "🧥" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              className="text-center group cursor-pointer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 flex items-center justify-center text-2xl md:text-3xl bg-zinc-800 rounded-full group-hover:bg-[#C5A065]/20 transition-colors duration-300">
                {item.icon}
              </div>
              <span className="text-xs md:text-sm text-gray-400 group-hover:text-[#C5A065] transition-colors duration-300">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
