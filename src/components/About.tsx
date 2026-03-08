import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../data/siteConfig";

export const About = () => {
  return (
    <section className="py-20 bg-section-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About Me
          </h2>
          {siteConfig.about.map((paragraph, i) => (
            <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
