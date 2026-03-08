import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

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
        <span className="font-bold text-primary/10 whitespace-nowrap select-none translate-x-[0.5%] translate-y-[-26%] sm:translate-x-0 sm:translate-y-0"
          style={{
    fontSize: "clamp(13rem, 50vw, 40rem)",
  }}>
           {siteConfig.name}
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6">
            Hello, I'm
            <span className="text-primary block mt-2">{siteConfig.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {siteConfig.headline}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
