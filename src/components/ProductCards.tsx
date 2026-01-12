"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Cap & gown",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
  {
    id: 2,
    name: "Announcements",
    image: "https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
  {
    id: 3,
    name: "Class rings",
    image: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
  {
    id: 4,
    name: "Letter Jackets",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function ProductCards() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={product.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-lg shadow-lg"
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-white font-[var(--font-playfair)] text-lg md:text-xl lg:text-2xl font-bold tracking-wide text-center">
                    {product.name}
                  </h3>
                  
                  {/* Hover reveal text */}
                  <motion.span
                    className="block mt-2 text-[#C5A065] text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    Shop Now →
                  </motion.span>
                </div>
                
                {/* Golden border on hover */}
                <div className="absolute inset-0 border-2 border-[#C5A065] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
