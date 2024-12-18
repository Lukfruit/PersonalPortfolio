import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: "translateY(calc(var(--scroll) * 0.9))",
        }}
      />

      {/* Giant background text */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
        style={{
          transform: "translateY(calc(var(--scroll) * 0.7))",
        }}
      >
        <span className="font-bold text-primary/5 whitespace-nowrap select-none translate-x-[0.5%] translate-y-[-26%] sm:translate-x-0 sm:translate-y-0"
          style={{
            fontSize: "clamp(13rem, 50vw, 40rem)",
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