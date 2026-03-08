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

interface TagLayout {
  tag: string;
  colStart: number;
  colSpan: number;
}

function computeTagLayout(tags: string[]): TagLayout[] {
  const longTags: string[] = [];
  const shortTags: string[] = [];
  tags.forEach(tag => {
    if (tag.length >= 10) longTags.push(tag);
    else shortTags.push(tag);
  });

  const result: TagLayout[] = [];
  let longIdx = 0;
  let shortIdx = 0;

  while (longIdx < longTags.length || shortIdx < shortTags.length) {
    let col = 0;
    // Try to place a long tag first in this row
    if (longIdx < longTags.length && col + 2 <= 3) {
      result.push({ tag: longTags[longIdx], colStart: col, colSpan: 2 });
      longIdx++;
      col += 2;
    }
    // Fill remaining slots with short tags
    while (col < 3 && shortIdx < shortTags.length) {
      result.push({ tag: shortTags[shortIdx], colStart: col, colSpan: 1 });
      shortIdx++;
      col++;
    }
    // If nothing was placed (shouldn't happen), break to avoid infinite loop
    if (col === 0) break;
  }

  return result;
}

function getJustification(colStart: number, colSpan: number): string {
  if (colSpan === 2) return "justify-center";
  if (colStart === 0) return "justify-end";
  if (colStart === 2) return "justify-start";
  return "justify-center";
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
    const shortTags = tags.filter(t => t.length < 10);
    if (shortTags.length === 0) return "4rem";
    const maxLength = Math.max(...shortTags.map(tag => tag.length));
    return `${maxLength * 0.7 + 2}rem`;
  };

  const layout = computeTagLayout(tags);
  const maxWidth = getMaxTagWidth(tags);

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
      <div className="grid grid-cols-3 gap-2 mt-auto">
        {layout.map(({ tag, colStart, colSpan }) => (
          <div
            key={tag}
            className={`flex items-center ${getJustification(colStart, colSpan)}`}
            style={{ gridColumn: `${colStart + 1} / span ${colSpan}` }}
          >
            <span
              className="px-3 py-1 bg-secondary text-primary text-sm rounded-full text-center"
              style={{ width: colSpan === 2 ? "100%" : maxWidth }}
            >
              {tag}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
