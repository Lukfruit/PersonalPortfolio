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
        {/* Content background with parallax - removed the unnecessary yellowish overlay */}
        <div 
          className="absolute inset-x-0 -top-20 -bottom-30 bg-gradient-to-b from-[#FDE1D3]/95 to-[#F7D9CB]/95"
          style={{
            transform: "translateY(calc(var(--scroll) * 0.4))",
          }}
        />
        
{/*         Option 1: Light Teal 
      <div className="relative z-10 bg-[#E5F2F2]/95 p-8 mb-8">
         <h3 className="text-2xl font-bold mb-4">Option 1: Light Teal Background</h3>
         <About />
        </div> */}

        {/* Option 2: Soft Peach */}
        <div className="relative z-10 bg-[#FDE1D3]/95 p-8 mb-8">
          {/* <h3 className="text-2xl font-bold mb-4">Option 2: Soft Peach Background</h3> */}
          <About />
        </div>

{/* Option 3: Darker Current Color
  <div className="relative z-10 bg-[#E1E0F5]/95 p-8 mb-8">
    <h3 className="text-2xl font-bold mb-4">Option 3: Darker Current Color</h3>
      <About />
       </div> */}

        <div className="relative z-10">
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Index;
