import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    tags: ["React", "TypeScript", "Tailwind"],
    bgColor: "bg-[#E8F3F3]", // Soft mint
    tagColor: "bg-[#006666]", // Darker teal
  },
  {
    title: "Project Two",
    description: "An innovative solution for modern problems",
    tags: ["Next.js", "Node.js", "MongoDB"],
    bgColor: "bg-[#F3E8E8]", // Soft rose
    tagColor: "bg-[#8B4513]", // Saddle brown
  },
  {
    title: "Project Three",
    description: "Transforming ideas into reality",
    tags: ["React", "Firebase", "Redux"],
    bgColor: "bg-[#E8F0F3]", // Soft blue
    tagColor: "bg-[#1A5F7A]", // Steel blue
  },
  {
    title: "Project Four",
    description: "Building seamless user experiences",
    tags: ["Vue.js", "GraphQL", "AWS"],
    bgColor: "bg-[#F3F0E8]", // Soft cream
    tagColor: "bg-[#8B7355]", // Warm brown
  },
  {
    title: "Project Five",
    description: "Creating intuitive interfaces",
    tags: ["Angular", "Python", "Docker"],
    bgColor: "bg-[#ECF3E8]", // Soft sage
    tagColor: "bg-[#4F7942]", // Fern green
  },
  {
    title: "Project Six",
    description: "Developing scalable solutions",
    tags: ["React Native", "Express", "PostgreSQL"],
    bgColor: "bg-[#F2E8F3]", // Soft lavender
    tagColor: "bg-[#614051]", // Eggplant
  }
];

export const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-soft-text mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${project.bgColor} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
            >
              <h3 className="text-xl font-semibold text-soft-text mb-3">
                {project.title}
              </h3>
              <p className="text-soft-text/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 ${project.tagColor} text-white text-sm rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};