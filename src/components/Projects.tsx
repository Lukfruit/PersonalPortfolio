import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/projects";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const visible = projects.filter(p => p.visible !== false);
  const remainder = visible.length % 3;
  const splitAt = remainder === 0 ? visible.length : remainder === 1 ? visible.length - 4 : visible.length - 2;
  const topGroup = visible.slice(0, Math.max(splitAt, 0));
  const bottomGroup = visible.slice(Math.max(splitAt, 0));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className={topGroup.length === 0 ? 'mx-auto max-w-full lg:max-w-[calc(66.666%+1rem)]' : ''}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Projects
          </h2>
        </div>
        {topGroup.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topGroup.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        )}
        {bottomGroup.length > 0 && (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-full lg:max-w-[calc(66.666%+1rem)] ${topGroup.length > 0 ? 'mt-8' : ''}`}>
            {bottomGroup.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={topGroup.length + index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
