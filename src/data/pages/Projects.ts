export interface ProjectLinks {
  github?: string | null;
  demo?: string | null;
  caseStudy?: string | null;
}

export interface Project {
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  features: string[];
  links: ProjectLinks;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Portfolio Generator",
    subtitle: "Full-Stack Document Automation Platform",
    tags: [
      "C#",
      "React",
      "TypeScript",
      ".NET Aspire",
      "ASP.NET Minimal API",
      "Azure",
      "GitHub Actions",
    ],
    description:
      "A full-stack application that converts .docx resumes into multi-page portfolio websites with selectable themes, live previews, and downloadable generated files.",
    features: [
      "Built RESTful API endpoints with ASP.NET Minimal API for document parsing, preview generation, and ZIP file delivery.",
      "Developed a multi-step React and TypeScript workflow with file upload, client-side routing, and iframe-based live previews.",
      "Designed a theme engine supporting multiple generated CSS layouts and real-time preview rendering.",
      "Created a GitHub Actions pipeline that builds the frontend, publishes the .NET backend, and deploys to Azure App Service.",
      "Used .NET Aspire for local orchestration and cloud-ready application structure.",
    ],
    links: {
      github: "https://github.com/felker12/PortfolioSiteCreator",
      demo:
        "https://portfoliocreator-hwemcghrh5axesey.canadacentral-01.azurewebsites.net/",
      caseStudy: "/projects/portfolio-generator",
    },
  },
  {
    number: "02",
    title: "Time Punch Management System",
    subtitle: "Employee Time Tracking Application",
    tags: [
      "C#",
      "React",
      "TypeScript",
      "ASP.NET Core",
      ".NET Aspire",
      "SQL Server",
      "Azure",
    ],
    description:
      "A full-stack employee time tracking application designed around secure authentication, attendance workflows, administrative reporting, and relational data management.",
    features: [
      "Designed ASP.NET Core APIs for employee clock-in, clock-out, attendance tracking, and reporting workflows.",
      "Implemented secure authentication and role-based access for employee and administrative users.",
      "Modeled a relational SQL Server schema for users, shifts, time entries, and attendance data.",
      "Developed responsive React and TypeScript dashboards for employee and administrative workflows.",
      "Integrated GitHub Actions and Azure App Service deployment workflows.",
    ],
    links: {
      github: "https://github.com/felker12/TimePunchSite",
      demo: null,
      caseStudy: "/projects/time-punch",
    },
  },
  {
    number: "03",
    title: "Modular 2D RPG Engine",
    subtitle: "Custom Game Engine Architecture",
    tags: ["C#", "MonoGame", "xUnit", "XML", "WinForms"],
    description:
      "A modular 2D RPG engine with more than 10,000 lines of C# code, reusable gameplay systems, XML persistence, automated tests, and a custom content editor.",
    features: [
      "Architected separate systems for rendering, input, state management, combat, animation, and game logic.",
      "Built reusable engine systems for tile maps, encounters, inventory, action bars, and save/load persistence.",
      "Created a WinForms editor that improved content creation efficiency by approximately 30%.",
      "Refactored core systems over multiple development cycles to improve scalability and maintainability.",
      "Implemented xUnit tests across engine systems and data layers to reduce regressions.",
    ],
    links: {
      github: "https://github.com/felker12/SkeletonsAdventure",
      demo: null,
      caseStudy: "/projects/rpg-engine",
    },
  },
  {
    number: "04",
    title: "Personal Portfolio",
    subtitle: "Production Portfolio & Interactive Web Experience",
    tags: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Netlify",
      "GitHub Actions",
    ],
    description:
      "A responsive portfolio website built to present professional experience, software projects, and technical skills through reusable Astro components and an interactive Three.js visual system.",
    features: [
      "Built reusable Astro components with TypeScript and Tailwind CSS for maintainable page composition.",
      "Created hero and subtle Three.js background modes with particles, motion, and reduced-motion support.",
      "Implemented accessible navigation, responsive layouts, interactive panels, and one-time session loading behavior.",
      "Optimized performance, accessibility, SEO, and best practices through Lighthouse testing.",
      "Configured continuous deployment, custom domain management, HTTPS, and Netlify hosting.",
    ],
    links: {
      github: "https://github.com/felker12",
      demo: "https://anthonyfelker.com/",
      caseStudy: null,
    },
  },
  {
    number: "05",
    title: "Legacy Personal Portfolio",
    subtitle: "CI/CD & Deployment Modernization",
    tags: [
      "C#",
      "ASP.NET Framework 4.8",
      "Azure",
      "GitHub Actions",
    ],
    description:
      "A legacy ASP.NET Framework portfolio application modernized with automated builds, continuous delivery, and Azure App Service deployment.",
    features: [
      "Configured GitHub Actions for repeatable build and deployment workflows.",
      "Deployed the application to Azure App Service with continuous delivery integration.",
      "Maintained and updated a legacy ASP.NET Framework application structure.",
      "Managed hosting configuration, release validation, and production deployment troubleshooting.",
    ],
    links: {
      github: "https://github.com/felker12/PortfolioWebsite",
      demo:
        "https://portfoliowebsite20250804050941-fxffbqhbcmdqbgg9.canadacentral-01.azurewebsites.net/",
      caseStudy: "/projects/legacy-portfolio",
    },
  },
];