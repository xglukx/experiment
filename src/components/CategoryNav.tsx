"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  { name: "Shop High School", href: "#" },
  { name: "Shop College", href: "#" },
  { name: "Greek+Life", href: "#" },
  { name: "Announcements", href: "#" },
  { name: "Frames", href: "#" },
  { name: "Charly Regalia Rented", href: "#" },
];

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <motion.div 
      className="bg-white py-4 overflow-x-auto no-scrollbar border-b border-gray-200"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-6 md:space-x-10 min-w-max">
        {categories.map((category, index) => (
          <motion.a
            key={category.name}
            href={category.href}
            className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
              activeCategory === category.name 
                ? "text-[#C5A065]" 
                : "text-gray-700 hover:text-[#C5A065]"
            }`}
            onMouseEnter={() => setActiveCategory(category.name)}
            onMouseLeave={() => setActiveCategory(null)}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {category.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
