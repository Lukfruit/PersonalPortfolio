import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  detailedDescription?: string;
  challenges?: string;
  solutions?: string;
  repo?: string;
  link?: string;
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
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-background border-border p-0">
        {/* Hero section with giant background text */}
        <div className="relative min-h-[300px] flex items-center overflow-hidden p-8">
          {/* Giant background text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span 
              className="font-bold text-primary/10 whitespace-nowrap select-none"
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
                  className="px-3 py-1 bg-secondary text-primary text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-muted-foreground mb-4">
              {project.description}
            </p>

            {(project.repo || project.link) && (
              <div className="flex gap-3">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content section */}
        <div className="bg-accent p-8 space-y-6">
          {project.detailedDescription && (
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
          )}

          {project.challenges && (
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Challenges</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}

          {project.solutions && (
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Solutions</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solutions}
              </p>
            </div>
          )}

          {(project.repo || project.link) && (
            <div className="flex gap-3 pt-2">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
