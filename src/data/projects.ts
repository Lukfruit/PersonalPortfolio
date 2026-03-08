// ============================================
// PROJECTS CONFIGURATION
// Edit this file to add, remove, or update projects.
// To hide a project, set visible: false.
// To add a new project, copy a block and fill in the fields.
// ============================================

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  challenges?: string;
  solutions?: string;
  tags: string[];
  link?: string;       // Live demo URL
  repo?: string;       // GitHub repo URL
  visible?: boolean;   // Set to false to hide (default: true)
}

export const projects: Project[] = [
  // ---------- Project One ----------
  {
    id: "project-one",
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    detailedDescription: `This project showcases the power of modern web development technologies.

    Built with a focus on user experience and performance, this application demonstrates the seamless integration of React's component-based architecture with TypeScript's type safety.
    
    The project leverages the latest web technologies and best practices to deliver a robust and scalable solution.`,
    challenges: "One of the main challenges was implementing a responsive design that works seamlessly across all devices while maintaining performance and ensuring a consistent user experience.",
    solutions: "We utilized a combination of Tailwind CSS breakpoints and React's lazy loading capabilities to ensure optimal performance across all devices. The component architecture was carefully planned to maximize reusability and maintainability.",
    tags: ["React", "TypeScript", "Tailwind"],
    // link: "https://example.com",
    // repo: "https://github.com/...",
  },

  // ---------- Project Two ----------
  {
    id: "project-two",
    title: "Project Two",
    description: "An innovative solution for modern problems",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },

  // ---------- Project Three ----------
  {
    id: "project-three",
    title: "Project Three",
    description: "Transforming ideas into reality",
    tags: ["React", "Firebase", "Redux"],
  },

  // ---------- Project Four ----------
  {
    id: "project-four",
    title: "Project Four",
    description: "Building seamless user experiences",
    tags: ["Vue.js", "GraphQL", "AWS"],
    visible: false,
  },

  // ---------- Project Five ----------
  {
    id: "project-five",
    title: "Project Five",
    description: "Creating innovative digital solutions",
    tags: ["Angular", "Python", "Docker"],
    visible: false,
  },

  // ---------- Project Six ----------
  {
    id: "project-six",
    title: "Project Six",
    description: "Developing cutting-edge applications",
    tags: ["Svelte", "Go", "Kubernetes"],
    visible: false,
  },
];
