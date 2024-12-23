import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F6EFE9] min-h-screen relative">
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Giant background text */}
        <div 
          className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
          style={{
            transform: "translateY(calc(var(--scroll) * 0.7))",
          }}
        >
          <span className="font-bold text-primary/5 whitespace-nowrap select-none translate-x-[0.5%] translate-y-[-26%] sm:translate-x-0 sm:translate-y-0"
            style={{
              fontSize: "clamp(13rem, 50vw, 40rem)", // Min size 10rem, scales with viewport, max size 25rem
            }}>
            {project.title}
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/">
            <Button variant="outline" className="mb-8 hover:bg-white/20 transition-colors">
              <ArrowLeft className="mr-2" />
              Back to Projects
            </Button>
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold text-soft-text mb-6 text-left">
              <span className="text-primary block">{project.title}</span>
            </h1>
            <div className="flex gap-3 justify-start flex-wrap mb-8">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#F3E9E4]/90 text-primary text-lg rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl md:text-2xl text-soft-text/80 text-left">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content section */}
      <div className="relative">
        <div 
          className="absolute inset-x-0 -top-40 bottom-[20rem] bg-gradient-to-b from-[#FDE1D3]/95 to-[#F7D9CB]/95"
          style={{
            transform: "translateY(calc(var(--scroll) * 0.3))",
          }}
        />

        <div className="relative z-10">
          <section className="space-y-8 bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            {project.detailedDescription && (
              <div>
                <h2 className="text-4xl font-semibold mb-6 text-soft-text">Overview</h2>
                <p className="text-xl text-soft-text/90 leading-relaxed whitespace-pre-line">
                  {project.detailedDescription}
                </p>
              </div>
            )}

            {project.challenges && (
              <div>
                <h2 className="text-4xl font-semibold mb-6 text-soft-text">Challenges</h2>
                <p className="text-xl text-soft-text/90 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {project.solutions && (
              <div>
                <h2 className="text-4xl font-semibold mb-6 text-soft-text">Solutions</h2>
                <p className="text-xl text-soft-text/90 leading-relaxed">
                  {project.solutions}
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;