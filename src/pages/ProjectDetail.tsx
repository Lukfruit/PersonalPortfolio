import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

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
      {/* Parallax background effect */}
      <div 
        className="absolute inset-x-0 -top-40 bottom-[20rem] bg-gradient-to-b from-[#FDE1D3]/95 to-[#F7D9CB]/95"
        style={{
          transform: "translateY(calc(var(--scroll) * 0.3))",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <Link to="/">
          <Button variant="outline" className="mb-8 hover:bg-white/20 transition-colors">
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Button>
        </Link>

        <div className="space-y-16 max-w-4xl mx-auto">
          <header className="text-center">
            <h1 className="text-6xl font-bold mb-6 text-soft-text animate-fade-up">
              {project.title}
            </h1>
            
            <div className="flex gap-3 justify-center flex-wrap mb-8">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#F3E9E4]/90 text-primary text-lg rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <section className="space-y-8 bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div>
              <h2 className="text-4xl font-semibold mb-6 text-soft-text">Overview</h2>
              <p className="text-xl text-soft-text/90 leading-relaxed whitespace-pre-line">
                {project.detailedDescription || project.description}
              </p>
            </div>

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