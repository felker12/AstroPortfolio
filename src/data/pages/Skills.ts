export interface SkillGroup {
  number: string;
  category: string;
  description: string;
  skills: string[];
  icon: string;
}

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    category: "Languages",
    description:
      "Languages I use across full-stack applications, APIs, relational databases, and production websites.",
    skills: [
      "C#",
      "TypeScript",
      "JavaScript",
      "SQL",
      "HTML5",
      "CSS3",
      "XML",
    ],
    icon: "mdi:code-tags",
  },
  {
    number: "02",
    category: "Frameworks & Libraries",
    description:
      "Frameworks and libraries used to build responsive interfaces, backend services, APIs, and maintainable application systems.",
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
    icon: "mdi:application-braces-outline",
  },
  {
    number: "03",
    category: "Cloud & DevOps",
    description:
      "Platforms and workflows used to automate builds, deploy applications, manage releases, and support production environments.",
    skills: [
      "Azure App Services",
      "Netlify",
      "GitHub Actions",
      "Git",
      "GitHub",
    ],
    icon: "mdi:cloud-upload-outline",
  },
  {
    number: "04",
    category: "Databases",
    description:
      "Relational database technologies used for application persistence, API development, reporting, and structured data management.",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Entity Framework Core",
      "Relational Schema Design",
    ],
    icon: "mdi:database-outline",
  },
  {
    number: "05",
    category: "Architecture & Concepts",
    description:
      "Engineering practices that guide how I design, test, secure, and maintain full-stack software.",
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
    icon: "mdi:source-branch",
  },
  {
    number: "06",
    category: "Platforms & Tools",
    description:
      "Operating systems and development tools used throughout my professional work and personal software projects.",
    skills: [
      "Windows",
      "Linux (Ubuntu)",
      "Visual Studio",
      "SQL Server Management Studio",
      "GitHub Copilot",
    ],
    icon: "mdi:tools",
  },
];