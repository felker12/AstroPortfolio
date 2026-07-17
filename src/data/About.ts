export interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ClientProject {
  name: string;
  href: string;
  stack: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  bullets: string[];
  projects?: ClientProject[];
}

export const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "Languages",
    description:
      "Languages I use across full-stack applications, APIs, databases, and production websites.",
    skills: [
      "C#",
      "TypeScript",
      "JavaScript",
      "SQL",
      "HTML5",
      "CSS3",
      "XML",
    ],
  },
  {
    number: "02",
    title: "Frameworks & Libraries",
    description:
      "Frameworks and libraries I use to build modern web experiences and maintainable software.",
    skills: [
      "ASP.NET Core",
      "Astro",
      "React",
      ".NET Aspire",
      "Tailwind CSS",
      "Entity Framework Core",
      "MonoGame",
      "xUnit",
    ],
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    description:
      "Platforms and workflows I use to deploy, automate, and maintain production systems.",
    skills: [
      "Azure App Services",
      "Netlify",
      "GitHub Actions",
      "Git",
    ],
  },
  {
    number: "04",
    title: "Databases",
    description:
      "Relational database technologies used across full-stack applications and APIs.",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Entity Framework Core",
      "Relational Schema Design",
    ],
  },
  {
    number: "05",
    title: "Architecture & Concepts",
    description:
      "Engineering practices that guide how I design, test, secure, and maintain software.",
    skills: [
      "Object-Oriented Design",
      "REST APIs",
      "API Integration",
      "System Design",
      "Testing",
      "Agile/Scrum",
      "Relational Databases",
      "Authentication/Authorization",
    ],
  },
  {
    number: "06",
    title: "Platforms & Tools",
    description:
      "Operating systems and development tools used throughout my professional and personal work.",
    skills: [
      "Windows",
      "Linux (Ubuntu)",
      "Visual Studio",
      "Visual Studio Code",
      "SQL Server Management Studio",
      "GitHub Copilot",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "Southard Homes, LLC",
    location: "Terre Haute, IN",
    period: "2026 – Present",
    current: true,
    bullets: [
      "Design, develop, deploy, and maintain production websites for multiple business clients using Astro, Tailwind CSS, TypeScript, GitHub, and Netlify.",
      "Develop new features, troubleshoot issues, and implement performance, SEO, accessibility, and responsive-design improvements.",
      "Manage source control, production deployments, hosting platforms, DNS configuration, and release workflows.",
      "Collaborate directly with business owners to gather requirements, translate feedback into technical solutions, and deliver ongoing website improvements.",
    ],
    projects: [
      {
        name: "Southard Homes",
        href: "https://southardhomesllc.com",
        stack: "Astro · Tailwind CSS · TypeScript",
        description:
          "Maintain and enhance the production website through feature development, content updates, and deployment management.",
      },
      {
        name: "Quality Electric of Indiana",
        href: "https://qualityelectricofindiana.com/",
        stack: "Astro · Tailwind CSS · TypeScript",
        description:
          "Provide ongoing maintenance, feature enhancements, performance improvements, and production support.",
      },
      {
        name: "Quality Landscape & Leisure",
        href: "https://qualitylandscapeofindiana.com/",
        stack: "Astro · Tailwind CSS · TypeScript",
        description:
          "Designed and developed a responsive production website from the ground up, including GitHub, Netlify, and Lighthouse optimization.",
      },
      {
        name: "Monarch Media LLC",
        href: "https://monarchmediallc.com/",
        stack:
          "Astro · TypeScript · C# · ASP.NET Core · PostgreSQL · EF Core",
        description:
          "Developed a full-stack business website with a custom Web API, PostgreSQL backend, secure administration features, and Azure deployment.",
      },
    ],
  },
  {
    role: "Operations Technology Professional (OTP 2)",
    company: "Jedele Enterprises",
    location: "Brazil, IN",
    period: "2019 – 2026",
    current: false,
    bullets: [
      "Supported business-critical systems with 99%+ uptime while reducing incident resolution time by more than one hour.",
      "Diagnosed and resolved complex software, hardware, networking, and integration issues in high-pressure environments.",
      "Performed root-cause analysis and contributed to long-term system reliability improvements.",
      "Assisted with system upgrades, infrastructure improvements, and technical deployments.",
      "Mentored team members and served as a technical liaison to non-technical stakeholders.",
      "Worked across operations and technical teams to diagnose failures and improve system reliability.",
    ],
  },
];