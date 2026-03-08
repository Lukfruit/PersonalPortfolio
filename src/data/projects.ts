export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  challenges?: string;
  solutions?: string;
  tags: string[];
}

export const projects: Project[] = [
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
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "An innovative solution for modern problems",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    id: "project-three",
    title: "Project Three",
    description: "Transforming ideas into reality",
    tags: ["React", "Firebase", "Redux"],
  },
  // {
  //   id: "project-four",
  //   title: "Project Four",
  //   description: "Building seamless user experiences",
  //   tags: ["Vue.js", "GraphQL", "AWS"],
  // },
  // {
  //   id: "project-five",
  //   title: "Project Five",
  //   description: "Creating innovative digital solutions",
  //   tags: ["Angular", "Python", "Docker"],
  // },
  // {
  //   id: "project-six",
  //   title: "Project Six",
  //   description: "Developing cutting-edge applications",
  //   tags: ["Svelte", "Go", "Kubernetes"],
  // },
  // {
  //   id: "project-seven",
  //   title: "Project Seven",
  //   description: "Optimizing performance at scale",
  //   tags: ["React", "Ruby", "Redis"],
  // },
  // {
  //   id: "project-eight",
  //   title: "Project Eight",
  //   description: "Engineering reliable systems",
  //   tags: ["Java", "Spring", "PostgreSQL"],
  // },
  // {
  //   id: "project-nine",
  //   title: "Project Nine",
  //   description: "Crafting delightful interfaces",
  //   tags: ["Flutter", "Dart", "Firebase"],
  // }
];
