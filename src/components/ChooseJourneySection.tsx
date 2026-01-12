"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { name: "Announcements/Invitations", href: "#" },
  { name: "Colleges", href: "#" },
  { name: "Greek", href: "#" },
  { name: "Charity", href: "#" },
];

const products = [
  {
    id: 1,
    name: "Cap and gown",
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
    name: "Frames",
    image: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
  {
    id: 5,
    name: "Letter jackets",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
];

export default function ChooseJourneySection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            You are worth celebrating. Choose your journey.
          </h2>
          
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6">
            {categories.map((category, index) => (
              <motion.a
                key={category.name}
                href={category.href}
                className="text-sm md:text-base text-gray-500 hover:text-[#C5A065] transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Products row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link
                href={product.href}
                className="group relative block overflow-hidden"
              >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <p className="mt-3 text-center text-sm md:text-base text-gray-700 group-hover:text-[#C5A065] transition-colors duration-200">
                  {product.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
