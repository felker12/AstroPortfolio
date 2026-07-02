import type { Screenshot } from '@data/projects/projects.ts'

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

export const features = [
  {
    title: "Employee Authentication",
    desc: "Supports secure sign-in workflows with separate access levels for employees and administrators."
  },
  {
    title: "Clock In / Clock Out Workflow",
    desc: "Allows employees to start and end shifts while tracking timestamps and maintaining shift history."
  },
  {
    title: "Attendance Dashboard",
    desc: "Provides a responsive React interface for viewing current status, shift history, and worked time."
  },
  {
    title: "Administrative Reporting",
    desc: "Gives administrators tools to review attendance records, identify discrepancies, and support payroll review."
  },
  {
    title: "SQL Server Persistence",
    desc: "Stores users, shifts, and time entries using a relational SQL Server database structure."
  },
  {
    title: "Responsive Interface",
    desc: "Built with a responsive layout so the application can be used comfortably on desktop and tablet-sized screens."
  }
];