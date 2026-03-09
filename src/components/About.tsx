import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export const About = () => {
  return (
    <section className="py-20 bg-section-warm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-16 max-w-5xl mx-auto">
          {/* Mobile heading */}
          <h2 className="text-4xl font-bold text-foreground mb-8 md:hidden">
            About Me
          </h2>
          
          {/* Desktop vertical sidebar heading */}
          <div className="hidden md:block relative w-24 shrink-0">
            <h2 
              className="text-7xl font-black text-muted-foreground/30 sticky top-32"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              About Me
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 pt-2 md:pt-0"
          >
            {siteConfig.about.map((paragraph, i) => (
              <p key={i} className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed mb-8">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
