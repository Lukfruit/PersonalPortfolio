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
    <main className="bg-[#F6EFE9] min-h-screen relative">
      <Hero />
      <div className="relative">
        {/* Content background with parallax - medium speed */}
        <div 
          className="absolute inset-x-0 -top-96 h-[150%] bg-[#FDE1D3]/95"
          style={{
            transform: "translateY(calc(var(--scroll) * 0.4))", // Medium speed (half of content speed)
          }}
        />
        
        <div className="relative z-10 pb-20" style={{
          transform: "translateY(calc(var(--scroll) * 0.8))", // Fastest speed for content
        }}>
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Index;