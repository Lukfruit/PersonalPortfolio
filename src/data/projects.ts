// ============================================
// PROJECTS CONFIGURATION
// Edit this file to add, remove, or update projects.
// To hide a project, set visible: false.
// To add a new project, copy a block and fill in the fields.
// ============================================

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  challengesSolutions?: ChallengeSolution[];
  tags: string[];
  link?: string;
  repo?: string;
  visible?: boolean;
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
    challengesSolutions: [
      {
        challenge: "Working with 31M+ transaction records required careful data engineering to extract meaningful RFM (Recency, Frequency, Monetary) features from raw purchase data while keeping processing efficient.",
        solution: "Leveraged Python, Pandas, and Scikit-learn to build a scalable pipeline — from data cleaning through K-means clustering with silhouette analysis to determine the optimal number of segments.",
      },
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "K-means", "Matplotlib", "Seaborn"],
    repo: "https://github.com/IvanL-works/H-M-Data-Project",
  },

  // ---------- YouTube Tab Analyser ----------
  {
    id: "youtube-tab-analyser",
    title: "YouTube Tab Analyser",
    description: "A Firefox extension that collects metadata from open YouTube tabs and aggregates viewing behavior — including channels, tags, duration, and watch time patterns.",
    detailedDescription: `A Firefox browser extension that scans all open tabs to identify and analyse YouTube content. It collects metadata such as channel names, video tags, and duration — even from unloaded tabs — by fetching data via API calls.

    The extension aggregates watch time by channel and topic to identify viewing patterns, then presents a popup dashboard summarizing your interests by time spent. Works seamlessly with discarded tabs, making it lightweight and efficient.
    
    Recently submitted for public release on the Firefox Add-ons store.`,
    challengesSolutions: [
      {
        challenge: "Handling unloaded/discarded tabs required working around browser API limitations, as tab content isn't directly accessible when tabs are suspended. Retrieving accurate metadata for unloaded tabs needed a different approach than standard content scripts.",
        solution: "Implemented API fetching for unloaded tabs to retrieve channel, tag, and duration metadata without requiring tabs to be fully loaded. Aggregated data by channel and topic to surface meaningful viewing patterns in a concise popup dashboard.",
      },
    ],
    tags: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Lukfruit/Firefox-Youtube-Tab-counter",
  },

  // ---------- Portfolio Website ----------
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React, TypeScript, and Tailwind CSS — featuring dark mode, animated transitions, and a modular project showcase system.",
    detailedDescription: `A modern developer portfolio designed and built from scratch using React and TypeScript with Tailwind CSS for styling. Features include a theme toggle with smooth dark/light mode transitions, Framer Motion animations, and a dynamic project card system with detailed modal views.

    The site uses a clean component architecture with centralized data configuration, making it easy to add or update projects without touching component code. Fully responsive across all screen sizes.`,
    challengesSolutions: [
      {
        challenge: "Creating a cohesive design system that works seamlessly in both light and dark modes while keeping the codebase maintainable and easy to extend with new projects.",
        solution: "Leveraged Tailwind CSS semantic tokens and CSS variables for theming, combined with a data-driven architecture where all project content lives in a single configuration file.",
      },
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repo: "https://github.com/Lukfruit/PersonalPortfolio",
  },

  // ---------- LinguaWeb ----------
  {
    id: "linguaweb",
    title: "LinguaWeb",
    description: "An AI-powered iOS app for English speakers learning Korean, combining spaced repetition science with LLM morphological analysis for natural vocabulary acquisition.",
    detailedDescription: `LinguaWeb takes a sentence-first approach to vocabulary learning. Rather than flashcard drills, users practice by writing Korean sentences freely — an AI then detects which vocabulary words were used, regardless of conjugation or grammatical form.

    A scientifically-grounded spaced repetition system (SM-2 with ease factor integration) tracks each word's history across 8 proficiency levels, surfacing the right words at the right time through a dynamic 30-word focus queue.
    
    The app also generates personalised reading comprehension texts calibrated to the user's known vocabulary, and includes an offline 10,000+ word NIKL Korean-English dictionary with camera OCR for real-world sentence mining.`,
    challengesSolutions: [
      {
        challenge: "Morphological complexity of Korean — Korean is an agglutinative language; the same word root can appear in dozens of forms, making vocabulary detection from free-form sentences extremely difficult.",
        solution: "Used Gemini's LLM-based morphological analysis as the primary word detector, with Apple's NLP framework as a fallback, enabling detection of any vocabulary word regardless of inflection.",
      },
      {
        challenge: "AI text generation quality — Early reading texts had high validation rejection rates because the model had no visibility into what the user actually knew, leading to excessive retry loops.",
        solution: "Implemented structured generation: passing the user's full known vocabulary as a palette and instructing the model to construct text primarily from it, dramatically reducing retry loops and improving naturalness (in progress).",
      },
      {
        challenge: "Provider flexibility — The app started tightly coupled to Gemini, making it impossible to swap or test alternative models without rewriting business logic.",
        solution: "Designed a Model Abstraction Layer (MAL) with a provider-agnostic protocol and per-feature adapter pattern, allowing swapping or A/B testing models (e.g. Qwen, DeepSeek) without touching business logic.",
      },
      {
        challenge: "Anti-gaming the SRS — Simple success/failure tracking is gameable; users could artificially inflate their scores without genuine recall.",
        solution: "Built an encounters system that maintains a rolling 10-interaction history string, distinguishing genuine recall from lookups (which award only 0.5× XP), giving a more honest signal to the spaced repetition algorithm.",
      },
    ],
    tags: ["SwiftUI", "SQLite", "Gemini API", "Apple Vision", "SM-2 SRS"],
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
