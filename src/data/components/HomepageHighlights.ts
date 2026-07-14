export interface Highlight {
  number: string;
  eyebrow: string;
  align: "left" | "right";
  titleHtml: string;
  body: string;
  cta: string;
  href: string;
  tags: string[];
}

export const highlights: Highlight[] = [
  {
    number: "01",
    eyebrow: "Web Development",
    align: "left",
    titleHtml:
      "Production websites built for <em>real businesses.</em>",
    body:
      "I design, develop, deploy, and maintain responsive websites for local businesses using Astro, TypeScript, Tailwind CSS, GitHub, and Netlify. My work includes managing content, domains, deployments, performance, and ongoing updates after launch.",
    cta: "View web projects",
    href: "/projects",
    tags: ["Astro", "TypeScript", "Tailwind CSS", "Netlify"],
  },
  {
    number: "02",
    eyebrow: "Software Engineering",
    align: "right",
    titleHtml:
      "Full-stack applications built with <em>.NET.</em>",
    body:
      "I build full-stack applications with ASP.NET Core, C#, React, SQL, REST APIs, authentication, testing, and cloud-ready architecture. I focus on clear structure, maintainable code, and systems that can grow beyond the initial prototype.",
    cta: "Explore software projects",
    href: "/projects",
    tags: ["ASP.NET Core", "C#", "React", "SQL"],
  },
  {
    number: "03",
    eyebrow: "Problem Solving",
    align: "left",
    titleHtml:
      "A production-minded approach to <em>technical problems.</em>",
    body:
      "My background combines software development with years of supporting business-critical systems. That experience shapes how I work: investigate carefully, communicate clearly, consider the user impact, and build solutions that remain dependable after release.",
    cta: "Learn more about me",
    href: "/about",
    tags: ["Debugging", "Testing", "CI/CD", "Technical Support"],
  },
];