import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-section-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to new opportunities and interesting projects.
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="mailto:your.email@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
