import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";

interface ChallengeSolution {
  challenge: string;
  solution: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  detailedDescription?: string;
  challengesSolutions?: ChallengeSolution[];
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
        <div className="relative flex flex-col overflow-hidden px-8 pt-10 pb-8 min-h-[280px] justify-end">
          {/* Giant background text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span 
              className="font-bold text-primary/[0.07] dark:text-primary/[0.12] whitespace-nowrap select-none"
              style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
            >
              {project.title}
            </span>
          </div>

          <DialogHeader className="text-left mb-5">
            <DialogTitle className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex gap-2 flex-wrap mb-5">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary/90 backdrop-blur-sm border border-muted-foreground/20 text-primary text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-5">
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
                  GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-accent transition-colors text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          )}
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

          {project.challengesSolutions && project.challengesSolutions.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Challenges & Solutions</h2>
              <div className="space-y-5">
                {project.challengesSolutions.map((cs, i) => (
                  <div key={i} className="space-y-2">
                    <div>
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Challenge</span>
                      <p className="text-muted-foreground leading-relaxed mt-1">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Solution</span>
                      <p className="text-muted-foreground leading-relaxed mt-1">{cs.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
