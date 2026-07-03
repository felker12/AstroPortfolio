import type { ProjectHeroData, Screenshot, Feature } from '@data/projects/projects';

const screenshotroot = "/projectpics/timepunch/";

const screenshots: Screenshot[] = [
  { src: `${screenshotroot}homepage.png`, width: 1920, height: 1080, alt: "Time Punch application landing page" },
  { src: `${screenshotroot}login.png`, width: 1920, height: 1080, alt: "Time Punch login screen" },
  { src: `${screenshotroot}history.png`, width: 1920, height: 1080, alt: "Employee shift history screen" },
  { src: `${screenshotroot}dash.png`, width: 1920, height: 1080, alt: "Employee dashboard screen" },
  { src: `${screenshotroot}admindash.png`, width: 1920, height: 1080, alt: "Admin dashboard overview" },
  { src: `${screenshotroot}admindash2.png`, width: 1920, height: 1080, alt: "Admin reporting screen" },
];

export const visibleScreenshots = screenshots.filter((pic) => pic.src.trim() !== "");

export const tags = ["C#", "React", "TypeScript", "ASP.NET Core", ".NET Aspire", "SQL Server", "Azure"];

export const features: Feature[] = [
  {
    title: "Employee Authentication",
    description: "Supports secure sign-in workflows with separate access levels for employees and administrators."
  },
  {
    title: "Clock In / Clock Out Workflow",
    description: "Allows employees to start and end shifts while tracking timestamps and maintaining shift history."
  },
  {
    title: "Attendance Dashboard",
    description: "Provides a responsive React interface for viewing current status, shift history, and worked time."
  },
  {
    title: "Administrative Reporting",
    description: "Gives administrators tools to review attendance records, identify discrepancies, and support payroll review."
  },
  {
    title: "SQL Server Persistence",
    description: "Stores users, shifts, and time entries using a relational SQL Server database structure."
  },
  {
    title: "Responsive Interface",
    description: "Built with a responsive layout so the application can be used comfortably on desktop and tablet-sized screens."
  }
];

export const hero: ProjectHeroData = {
    category: "Full-Stack Web Application",

    title: "Time Punch Management System",

    description:
        "A full-stack employee attendance application designed to manage clock-in and clock-out workflows, store shift history, and provide administrative reporting through a React frontend and ASP.NET Core backend.",

    tags: ["C#", "React", "TypeScript", "ASP.NET Core", ".NET Aspire", "SQL Server", "Azure"],

    githubUrl: "https://github.com/felker12/TimePunchSite",
};

export const futureImprovements = [
  "Password recovery workflow",
  "Email notifications",
  "Manager approval workflows",
  "Payroll CSV export",
  "Deployment improvements"
];