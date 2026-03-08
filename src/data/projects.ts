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
    tags: ["Python", "Pandas", "Scikit-learn", "K-means"],
    repo: "https://github.com/IvanL-works/H-M-Data-Project",
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
