import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll",
        `${window.scrollY}px`
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-soft-bg min-h-screen relative">
      <Hero />
      <div className="relative">
        {/* Content background with parallax */}
        <div 
          className="absolute inset-x-0 -top-20 bottom-0 bg-soft-bg/95"
          style={{
            transform: "translateY(calc(var(--scroll) * 0.2))",
          }}
        />
        <div className="relative z-10">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Index;