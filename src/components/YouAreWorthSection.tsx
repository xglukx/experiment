"use client";

import { motion } from "framer-motion";

export default function YouAreWorthSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/center.png"
          alt="Graduate with confetti"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Golden bokeh effect */}
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(197, 160, 101, 0.5) 0%, transparent 40%),
                              radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.3) 0%, transparent 35%),
                              radial-gradient(circle at 50% 50%, rgba(197, 160, 101, 0.2) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
              You are worth<br />
              <span className="italic">celebrating.</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg font-[var(--font-inter)]">
              Lorem Lorem ipsum dolor it tempori elit, sed do eiusmod tempor incididunt.
            </p>
          </motion.div>

          {/* Empty right side for image focus */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
