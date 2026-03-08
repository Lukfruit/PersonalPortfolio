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
  // ---------- H&M Data Analytics ----------
  {
    id: "hm-data-project",
    title: "H&M Data Analytics",
    description: "Customer segmentation analysis of 31M+ H&M transactions, uncovering that 5% of customers drive over a third of revenue using K-means clustering on 1.35M customers.",
    detailedDescription: `Analyzed 31+ million transactions from H&M's customer base spanning 2 years to uncover actionable insights for customer retention and revenue optimization.

    Using K-means clustering on 1.35 million customers, I identified 4 distinct behavioral segments — from young frequent buyers to high-value VIPs — revealing that just 5.3% of customers contribute 36.4% of total revenue.
    
    The analysis also uncovered a 65% one-time purchase rate, highlighting a major conversion opportunity, and identified 345k lapsed customers as a win-back target.`,
    challenges: "Working with 31M+ transaction records required careful data engineering to extract meaningful RFM (Recency, Frequency, Monetary) features from raw purchase data while keeping processing efficient.",
    solutions: "Leveraged Python, Pandas, and Scikit-learn to build a scalable pipeline — from data cleaning through K-means clustering with silhouette analysis to determine the optimal number of segments.",
    tags: ["Python", "Pandas", "Scikit-learn", "K-means", "Matplotlib", "Seaborn"],
    repo: "https://github.com/IvanL-works/H-M-Data-Project",
  },

  // ---------- Project Two ----------
  {
    id: "youtube-tab-counter",
    title: "YouTube Tab Counter",
    description: "A Firefox extension that analyses your browser tabs and outputs detailed data on YouTube ones — including channels, tags, and watch time. Works with unloaded tabs.",
    detailedDescription: `A Firefox browser extension that scans all open tabs to identify and analyse YouTube content. It provides statistics like total tabs, identified channels, unique tags, and a ranked list of top interests by time spent.

    The extension works seamlessly with unloaded (discarded) tabs, meaning it can gather data even from tabs that haven't been fully loaded into memory — making it lightweight and efficient.
    
    Recently submitted for public release on the Firefox Add-ons store.`,
    challenges: "Handling unloaded/discarded tabs required working around browser API limitations, as tab content isn't directly accessible when tabs are suspended.",
    solutions: "Used the Firefox WebExtensions API to extract tab URLs and metadata without requiring tabs to be fully loaded, enabling efficient scanning of large tab collections.",
    tags: ["HTML", "JavaScript", "CSS"],
    repo: "https://github.com/Lukfruit/Firefox-Youtube-Tab-counter",
  },

  // ---------- Project Three ----------
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React, TypeScript, and Tailwind CSS — featuring dark mode, animated transitions, and a modular project showcase system.",
    detailedDescription: `A modern developer portfolio designed and built from scratch using React and TypeScript with Tailwind CSS for styling. Features include a theme toggle with smooth dark/light mode transitions, Framer Motion animations, and a dynamic project card system with detailed modal views.

    The site uses a clean component architecture with centralized data configuration, making it easy to add or update projects without touching component code. Fully responsive across all screen sizes.`,
    challenges: "Creating a cohesive design system that works seamlessly in both light and dark modes while keeping the codebase maintainable and easy to extend with new projects.",
    solutions: "Leveraged Tailwind CSS semantic tokens and CSS variables for theming, combined with a data-driven architecture where all project content lives in a single configuration file.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/Lukfruit/PersonalPortfolio",
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
