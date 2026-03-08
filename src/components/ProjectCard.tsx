import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  tags,
  index,
  onClick,
}) => {
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
      className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer border border-border"
      onClick={onClick}
    >
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>
      <div className="grid grid-cols-3 gap-0.5 mt-auto" style={{ gridAutoRows: '1.25rem' }}>
        {tags.map((tag, tagIndex) => {
          const maxWidth = getMaxTagWidth(tags);
          const isFat = tag.length >= 10;
          const colIndex = tagIndex % 3;
          return (
            <div 
              key={tag} 
              className={`flex items-center ${
                colIndex === 0 
                  ? 'justify-end' 
                  : colIndex === 2 
                    ? 'justify-start' 
                    : 'justify-center'
              } ${isFat ? 'row-span-2' : 'row-span-1'}`}
            >
              <span
                className={`px-3 bg-secondary text-primary text-sm rounded-full mx-1 inline-block text-center ${isFat ? 'py-2' : 'py-0.5'}`}
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
