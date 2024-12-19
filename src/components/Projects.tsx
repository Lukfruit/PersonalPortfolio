import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    tags: ["React", "TypeScript", "Tailwind"],
    bgColor: "bg-[#FAFCF7]/95", // Very Light, almost white
    tagColor: "bg-[#4B6B3A]/10 text-[#4B6B3A]"
  },
  {
    title: "Project Two",
    description: "An innovative solution for modern problems",
    tags: ["Next.js", "Node.js", "MongoDB"],
    bgColor: "bg-[#FAFCF7]/95",
    tagColor: "bg-[#4B6B3A]/10 text-[#4B6B3A]"
  },
  {
    title: "Project Three",
    description: "Transforming ideas into reality",
    tags: ["React", "Firebase", "Redux"],
    bgColor: "bg-[#FAFCF7]/95",
    tagColor: "bg-[#4B6B3A]/10 text-[#4B6B3A]"
  },
  {
    title: "Project Four",
    description: "Building seamless user experiences",
    tags: ["Vue.js", "GraphQL", "AWS"],
    bgColor: "bg-[#FAFCF7]/95",
    tagColor: "bg-[#4B6B3A]/10 text-[#4B6B3A]"
  },
  {
    title: "Project Five",
    description: "Creating innovative digital solutions",
    tags: ["Angular", "Python", "Docker"],
    bgColor: "bg-[#FAFCF7]/95",
    tagColor: "bg-[#4B6B3A]/10 text-[#4B6B3A]"
  },
  {
    title: "Project Six",
    description: "Developing cutting-edge applications",
    tags: ["Svelte", "Go", "Kubernetes"],
    bgColor: "bg-[#FAFCF7]/95",
    tagColor: "bg-[#4B6B3A]/10 text-[#4B6B3A]"
  },
  {
    title: "Project Seven",
    description: "Optimizing performance at scale",
    tags: ["React", "Ruby", "Redis"],
    bgColor: "bg-[#FAFCF7]/95",
    tagColor: "bg-[#4B6B3A]/10 text-[#4B6B3A]"
  },
  {
    title: "Project Eight",
    description: "Engineering reliable systems",
    tags: ["Java", "Spring", "PostgreSQL"],
    bgColor: "bg-[#FAFCF7]/95",
    tagColor: "bg-[#4B6B3A]/10 text-[#4B6B3A]"
  },
  {
    title: "Project Nine",
    description: "Crafting delightful interfaces",
    tags: ["Flutter", "Dart", "Firebase"],
    bgColor: "bg-[#FAFCF7]/95",
    tagColor: "bg-[#4B6B3A]/10 text-[#4B6B3A]"
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
                    className={`px-3 py-1 ${project.tagColor} text-sm rounded-full`}
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