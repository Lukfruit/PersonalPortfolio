import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "project-one",
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    tags: ["React", "TypeScript", "Tailwind"],
    bgColor: "bg-[#FAF6F3]/95",
    tagColor: "bg-[#F3E9E4]/90 text-[#008080]"
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "An innovative solution for modern problems",
    tags: ["Next.js", "Node.js", "MongoDB"],
    bgColor: "bg-[#FAF6F3]/95",
    tagColor: "bg-[#F3E9E4]/90 text-[#008080]"
  },
  {
    id: "project-three",
    title: "Project Three",
    description: "Transforming ideas into reality",
    tags: ["React", "Firebase", "Redux"],
    bgColor: "bg-[#FAF6F3]/95",
    tagColor: "bg-[#F3E9E4]/90 text-[#008080]"
  },
  {
    id: "project-four",
    title: "Project Four",
    description: "Building seamless user experiences",
    tags: ["Vue.js", "GraphQL", "AWS"],
    bgColor: "bg-[#FAF6F3]/95",
    tagColor: "bg-[#F3E9E4]/90 text-[#008080]"
  },
  {
    id: "project-five",
    title: "Project Five",
    description: "Creating innovative digital solutions",
    tags: ["Angular", "Python", "Docker"],
    bgColor: "bg-[#FAF6F3]/95",
    tagColor: "bg-[#F3E9E4]/90 text-[#008080]"
  },
  {
    id: "project-six",
    title: "Project Six",
    description: "Developing cutting-edge applications",
    tags: ["Svelte", "Go", "Kubernetes"],
    bgColor: "bg-[#FAF6F3]/95",
    tagColor: "bg-[#F3E9E4]/90 text-[#008080]"
  },
  {
    id: "project-seven",
    title: "Project Seven",
    description: "Optimizing performance at scale",
    tags: ["React", "Ruby", "Redis"],
    bgColor: "bg-[#FAF6F3]/95",
    tagColor: "bg-[#F3E9E4]/90 text-[#008080]"
  },
  {
    id: "project-eight",
    title: "Project Eight",
    description: "Engineering reliable systems",
    tags: ["Java", "Spring", "PostgreSQL"],
    bgColor: "bg-[#FAF6F3]/95",
    tagColor: "bg-[#F3E9E4]/90 text-[#008080]"
  },
  {
    id: "project-nine",
    title: "Project Nine",
    description: "Crafting delightful interfaces",
    tags: ["Flutter", "Dart", "Firebase"],
    bgColor: "bg-[#FAF6F3]/95",
    tagColor: "bg-[#F3E9E4]/90 text-[#008080]"
  }
];

export const Projects = () => {
  const navigate = useNavigate();
  
  const getMaxTagWidth = (tags: string[]) => {
    const maxLength = Math.max(...tags.map(tag => tag.length));
    return `${maxLength * 0.7 + 2}rem`;
  };

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
              className={`${project.bgColor} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer`}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-soft-text mb-3">
                  {project.title}
                </h3>
                <p className="text-soft-text/70 mb-4">{project.description}</p>
              </div>
              <div className="grid grid-cols-3 gap-0.5 mt-auto">
                {project.tags.map((tag, tagIndex) => {
                  const maxWidth = getMaxTagWidth(project.tags);
                  return (
                    <div 
                      key={tag} 
                      className={`flex items-center ${
                        tagIndex === 0 
                          ? 'justify-end' 
                          : tagIndex === 2 
                            ? 'justify-start' 
                            : 'justify-center'
                      }`}
                    >
                      <span
                        className={`px-3 py-1 ${project.tagColor} text-sm rounded-full mx-1 inline-block text-center`}
                        style={{ width: maxWidth }}
                      >
                        {tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
