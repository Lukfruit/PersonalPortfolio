export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  bgColor: string;
  tagColor: string;
}

export const projects: Project[] = [
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