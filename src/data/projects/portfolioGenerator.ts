import type { ProjectHeroData, Screenshot, Feature } from '@data/projects/projects';

const screenshotroot = "/projectpics/portfolio-generator/";

const screenshots: Screenshot[] = [
  { src: `${screenshotroot}home.png`, width: 1920, height: 1080, alt: "Portfolio Generator main dashboard" },
  { src: `${screenshotroot}upload.png`, width: 1920, height: 1080, alt: "Portfolio Generator upload interface" },
  { src: `${screenshotroot}uploadwithpreview.png`, width: 1920, height: 1080, alt: "Portfolio Generator upload with preview" },
  { src: `${screenshotroot}themeselection.png`, width: 1920, height: 1080, alt: "Portfolio Generator theme selection" },
  { src: `${screenshotroot}download.png`, width: 1920, height: 1080, alt: "Portfolio Generator download interface" },
];

export const visibleScreenshots = screenshots.filter((pic) => pic.src.trim() !== "");

export const hero: ProjectHeroData = {
    category: "Full-Stack Automation Platform",

    title: "Portfolio Generator",

    description:
        "A full-stack application that converts structured Microsoft Word (.docx) resumes into responsive portfolio websites.",

    tags: [
        "C#",
        "React",
        "TypeScript",
        ".NET Aspire",
        "Minimal API",
        "Azure",
        "GitHub Actions"
    ],

    githubUrl: "https://github.com/felker12/PortfolioSiteCreator",

    demoUrl: "https://portfoliocreator-hwemcghrh5axesey.canadacentral-01.azurewebsites.net/"
};


export const features: Feature[] = [
  {
    title: "Document Processing API",
    description: "Uses an ASP.NET Core backend to parse uploaded Word files, extracting structured resume information and converting it into a clean JSON structure."
  },
  {
    title: "Multi-Step Upload Workflow",
    description: "A step-by-step frontend guide built in React that helps users upload files, review extracted data, and select themes without confusion."
  },
  {
    title: "Isolated Live Preview",
    description: "Renders the generated portfolio templates inside an isolated iframe, ensuring template styles don't break the main app layout."
  },
  {
    title: "Dynamic Theme System",
    description: "Allows users to choose between multiple layouts and visual themes before generating their portfolio website."
  },
  {
    title: "Local Service Orchestration",
    description: "Managed with .NET Aspire to seamlessly handle service endpoints, environment variables, and connections during development."
  },
  {
    title: "Automated Deployment",
    description: "Configured with GitHub Actions pipelines to automatically test code changes and deploy the live build directly to Azure App Services."
  }
];

export const workflow = [
    {
        title: "Upload",
        description: "Upload a structured .docx resume."
    },
    {
        title: "Parse",
        description: "Extract resume data with ASP.NET Core."
    },
    {
        title: "Generate",
        description: "Convert the document into structured JSON."
    },
    {
        title: "Theme",
        description: "Choose a portfolio layout and styling."
    },
    {
        title: "Preview",
        description: "Review the generated website in real time."
    },
    {
        title: "Export",
        description: "Download the completed portfolio website."
    }
];

export const technicalHighlights = [
  {
    title: "ASP.NET Core",
    description:
      "Built Minimal API endpoints to receive uploaded resumes, parse document data, and return structured JSON consumed by the React frontend."
  },
  {
    title: "React + TypeScript",
    description:
      "Developed a multi-step user interface for uploading resumes, selecting themes, previewing generated websites, and exporting completed portfolios."
  },
  {
    title: "Theme Engine",
    description:
      "Designed a flexible theming system that separates layout templates from resume data, allowing multiple portfolio styles from the same source document."
  },
  {
    title: "Live Preview",
    description:
      "Rendered generated portfolio websites inside isolated iframes so themes could be previewed without affecting the application's interface."
  },
  {
    title: ".NET Aspire",
    description:
      "Used .NET Aspire to manage local services, configuration, and project orchestration, simplifying development across multiple application components."
  },
  {
    title: "GitHub Actions",
    description:
      "Configured CI/CD pipelines to build the React frontend, publish the ASP.NET backend, and deploy the application automatically to Azure App Service."
  }
];

export const challenges = [
  {
    title: "CI/CD Pipeline Configuration:",
    description:
      "Configuring the GitHub Actions workflow took several iterations to get right. Setting up the YAML file, coordinating the React frontend build with the ASP.NET Core backend publish process, and automating deployment to Azure App Service helped me better understand modern CI/CD pipelines."
  },
  {
    title: "Reading Word Documents:",
    description:
      "One of the biggest challenges was learning how to extract structured data from Microsoft Word (.docx) files. Using the DocumentFormat.OpenXml library, I built a parser that could read document content and convert it into structured data used to generate portfolio websites."
  },
  {
    title: "Service Coordination:",
    description:
      "Running multiple services locally initially required managing several applications and endpoints. Adopting .NET Aspire simplified local development by centralizing service orchestration, configuration, and project startup."
  }
];

export const futureImprovements = [
  "Add custom block editors",
  "Font customization",
  "One-click Netlify deployment",
  "Expanded UI theme library"
];
