"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PreservingPlanetSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/nearfootersection.png"
          alt="Sunlight filtering through forest trees"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Golden light effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, rgba(255, 215, 0, 0.4) 0%, transparent 60%)`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Preserving the Planet<br />
          for the next generation
        </motion.h2>

        <motion.p
          className="text-gray-200 text-base md:text-lg mb-10 max-w-2xl mx-auto font-[var(--font-inter)] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sus is mobility matures, from one ageneration to the next. Hant Lconve is commited to
          octacing our varwer hodtorin it feracy opert to cur falites.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="#"
            className="bg-[#C5A065] hover:bg-[#A88A50] text-black px-8 py-3 rounded text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Secondary Link
          </Link>
          <Link
            href="#"
            className="border border-white/70 hover:bg-white/10 text-white px-8 py-3 rounded text-sm font-semibold transition-all duration-300"
          >
            Tertiary Link
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
