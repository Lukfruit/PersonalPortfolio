import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Giant background text */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
        style={{
          transform: "translateY(calc(var(--scroll) * 0.7))",
        }}
      >
        <span className="font-bold text-primary/5 whitespace-nowrap select-none translate-x-[10%] translate-y-[-20%] sm:translate-x-0 sm:translate-y-0"
          style={{
    fontSize: "clamp(25rem, 50vw, 40rem)", // Min size 10rem, scales with viewport, max size 25rem
  }}>
          Your Name
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-soft-text mb-6">
            Hello, I'm
            <span className="text-primary block mt-2">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-soft-text/80">
            I create beautiful digital experiences
          </p>
        </motion.div>
      </div>
    </section>
  );
};
