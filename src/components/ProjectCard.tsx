import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Tag {
  name: string;
  color: string;
}

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  bgColor: string;
  tagColor: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tags,
  bgColor,
  tagColor,
  index,
}) => {
  const navigate = useNavigate();
  
  const getMaxTagWidth = (tags: string[]) => {
    const maxLength = Math.max(...tags.map(tag => tag.length));
    return `${maxLength * 0.7 + 2}rem`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${bgColor} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer`}
      onClick={() => navigate(`/project/${id}`)}
    >
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-soft-text mb-3">
          {title}
        </h3>
        <p className="text-soft-text/70 mb-4">{description}</p>
      </div>
      <div className="grid grid-cols-3 gap-0.5 mt-auto">
        {tags.map((tag, tagIndex) => {
          const maxWidth = getMaxTagWidth(tags);
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
                className={`px-3 py-1 ${tagColor} text-sm rounded-full mx-1 inline-block text-center`}
                style={{ width: maxWidth }}
              >
                {tag}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};