import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  bgColor: string;
  tagColor: string;
  detailedDescription?: string;
  challenges?: string;
  solutions?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-[#F6EFE9] border-none p-0">
        {/* Hero section with giant background text */}
        <div className="relative min-h-[300px] flex items-center overflow-hidden p-8">
          {/* Giant background text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span 
              className="font-bold text-primary/5 whitespace-nowrap select-none"
              style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
            >
              {project.title}
            </span>
          </div>

          <div className="relative z-10 w-full">
            <DialogHeader className="text-left">
              <DialogTitle className="text-4xl md:text-6xl font-bold text-primary mb-4">
                {project.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex gap-2 flex-wrap mb-4">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#F3E9E4]/90 text-primary text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-soft-text/80">
              {project.description}
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="bg-gradient-to-b from-[#FDE1D3]/50 to-[#F7D9CB]/50 p-8 space-y-6">
          {project.detailedDescription && (
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-soft-text">Overview</h2>
              <p className="text-soft-text/90 leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
          )}

          {project.challenges && (
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-soft-text">Challenges</h2>
              <p className="text-soft-text/90 leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}

          {project.solutions && (
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-soft-text">Solutions</h2>
              <p className="text-soft-text/90 leading-relaxed">
                {project.solutions}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
