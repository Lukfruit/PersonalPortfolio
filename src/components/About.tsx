import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A4365] mb-8">
            About Me
          </h2>
          <p className="text-lg text-[#4A5568] leading-relaxed mb-6">
            I'm a passionate developer focused on creating intuitive and engaging web experiences. With a keen eye for design and attention to detail, I bring ideas to life through clean, efficient code.
          </p>
          <p className="text-lg text-[#4A5568] leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};