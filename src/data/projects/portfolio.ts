import type {
  ProjectHeroData,
  Screenshot,
  Feature,
  FlowStep,
  TechnicalHighlight,
  Challenge
} from '@data/projects/projects';

const screenshotroot = "/projectpics/portfolio/";

const screenshots: Screenshot[] = [
  {
    src: `${screenshotroot}home.png`,
    width: 1920,
    height: 1080,
    alt: "Legacy portfolio homepage"
  },
  {
    src: `${screenshotroot}projects.png`,
    width: 1920,
    height: 1080,
    alt: "Legacy portfolio projects page"
  },
  {
    src: `${screenshotroot}about.png`,
    width: 1920,
    height: 1080,
    alt: "Legacy portfolio about page"
  },
  {
    src: `${screenshotroot}contact.png`,
    width: 1920,
    height: 1080,
    alt: "Legacy portfolio contact page"
  },
  {
    src: `${screenshotroot}skills.png`,
    width: 1920,
    height: 1080,
    alt: "Legacy portfolio skills page"
  }
];

export const visibleScreenshots = screenshots.filter((pic) => pic.src.trim() !== "");

export const hero: ProjectHeroData = {
  category: "Legacy .NET Portfolio",
  title: "Legacy Personal Portfolio",
  description:
    "A personal portfolio website built with C# and ASP.NET Framework 4.8, later updated with automated deployment workflows using GitHub Actions and Azure App Service.",
  tags: ["C#", "ASP.NET Framework 4.8", "Azure App Service", "GitHub Actions"],
  githubUrl: "https://github.com/felker12/PortfolioWebsite",
  demoUrl: "https://anthonyfelker.com"
};

export const features: Feature[] = [
  {
    title: "Personal Portfolio Pages",
    description:
      "Presented professional information, technical skills, and selected projects through a traditional server-rendered .NET website."
  },
  {
    title: "ASP.NET Framework Application",
    description:
      "Built with C# and ASP.NET Framework 4.8, giving me experience maintaining and deploying a legacy .NET web application."
  },
  {
    title: "Automated Deployment",
    description:
      "Used GitHub Actions to automate publishing the application to Azure App Service after repository updates."
  },
  {
    title: "Azure Hosting",
    description:
      "Configured the application for cloud hosting through Azure App Service."
  },
  {
    title: "Deployment Modernization",
    description:
      "Retrofitted a legacy-style application with a more modern CI/CD workflow."
  },
  {
    title: "Portfolio Foundation",
    description:
      "Served as the first version of my online portfolio before rebuilding the site with Astro and Tailwind CSS."
  }
];

export const flow: {
  title: string;
  subtitle: string;
  description: string;
  workflow: FlowStep[];
} = {
  title: "Deployment Flow",
  subtitle: "From Code Commit to Live Site",
  description:
    "The project focused on taking a legacy ASP.NET Framework portfolio and connecting it to a more modern deployment process using GitHub Actions and Azure App Service.",
  workflow: [
    {
      title: "Commit",
      description: "Push code changes to the GitHub repository."
    },
    {
      title: "Build",
      description: "GitHub Actions builds and prepares the .NET application."
    },
    {
      title: "Publish",
      description: "The deployment workflow packages the application output."
    },
    {
      title: "Deploy",
      description: "Azure App Service receives the published build."
    },
    {
      title: "Live Site",
      description: "The updated portfolio becomes available online."
    }
  ]
};

export const technicalHighlights: TechnicalHighlight[] = [
  {
    title: "ASP.NET Framework 4.8",
    description:
      "Built and maintained the portfolio as a legacy .NET Framework web application using C#."
  },
  {
    title: "GitHub Actions",
    description:
      "Configured automated deployment workflows so updates could be published without manual upload steps."
  },
  {
    title: "Azure App Service",
    description:
      "Hosted the application in Azure and connected the deployment pipeline to the live web app."
  },
  {
    title: "Legacy Deployment Workflow",
    description:
      "Worked through the differences between deploying modern .NET projects and older .NET Framework applications."
  },
  {
    title: "Custom Domain Setup",
    description:
      "Connected the hosted portfolio to a custom domain as part of the production deployment process."
  },
  {
    title: "Portfolio Migration Path",
    description:
      "Used this project as the foundation before later migrating to a modern Astro and Tailwind CSS portfolio."
  }
];

export const challenges: Challenge[] = [
  {
    title: "Legacy Framework Deployment:",
    description:
      "Deploying a .NET Framework 4.8 application required a different setup than newer .NET applications, which helped me better understand legacy hosting requirements."
  },
  {
    title: "GitHub Actions Configuration:",
    description:
      "Setting up the workflow required learning how to build and publish the application correctly from GitHub Actions to Azure App Service."
  },
  {
    title: "Modernizing an Older Project:",
    description:
      "The project helped me understand how to improve deployment practices around an older codebase without fully rewriting the application."
  }
];