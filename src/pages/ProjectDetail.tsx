import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    id: "project-one",
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    tags: ["React", "TypeScript", "Tailwind"],
    detailedDescription: `
      This project showcases the power of modern web development technologies.
      Key features include:
      • Responsive design using Tailwind CSS
      • Type-safe development with TypeScript
      • Component-based architecture with React
      • State management with React hooks
      • Performance optimizations
    `,
    challenges: "One of the main challenges was implementing a responsive design that works seamlessly across all devices while maintaining performance.",
    solutions: "We utilized Tailwind CSS breakpoints and React's lazy loading to ensure optimal performance across all devices.",
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "An innovative solution for modern problems",
    tags: ["Next.js", "Node.js", "MongoDB"],
    detailedDescription: `
      A full-stack application that demonstrates:
      • Server-side rendering with Next.js
      • RESTful API development with Node.js
      • Data persistence with MongoDB
      • Authentication and authorization
      • Real-time updates
    `,
    challenges: "Implementing real-time updates while maintaining data consistency across multiple users was particularly challenging.",
    solutions: "We implemented WebSocket connections and implemented optimistic updates to provide a seamless real-time experience.",
  },
  // ... Add similar detailed information for other projects
];

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
    <div className="container mx-auto px-4 py-8">
      <Link to="/">
        <Button variant="outline" className="mb-8">
          <ArrowLeft className="mr-2" />
          Back to Projects
        </Button>
      </Link>

      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      
      <div className="flex gap-2 mb-6">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 bg-[#F3E9E4]/90 text-[#008080] text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-soft-text/90 whitespace-pre-line">
            {project.detailedDescription}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <p className="text-soft-text/90">{project.challenges}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
          <p className="text-soft-text/90">{project.solutions}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;