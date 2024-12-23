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
      className={`${bgColor} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow h-[300px] cursor-pointer relative overflow-hidden`}
      onClick={() => navigate(`/project/${id}`)}
    >
      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5">
        <span 
          className="font-bold text-primary whitespace-nowrap select-none"
          style={{
            fontSize: "clamp(4rem, 15vw, 8rem)",
          }}
        >
          {title}
        </span>
      </div>

      <div className="relative z-10">
        <div className="text-left">
          <h3 className="text-4xl font-bold text-primary mb-3">
            {title}
          </h3>
          <p className="text-soft-text/70 mb-6 text-left">{description}</p>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`${tagColor} px-3 py-1 text-sm rounded-full`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};