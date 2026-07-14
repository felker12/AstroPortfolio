import type { CtaLink } from './Cta';

export interface HeroContent {
  eyebrow: string;
  titleHtml: string;
  body: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  tech: string[];
}

export const heroContent: HeroContent = {
  eyebrow: "Software Engineer · Full-Stack Developer",
  titleHtml:
    "I build dependable software and <em>modern web experiences.</em>",
  body:
    "My work includes production websites and full-stack software, with an emphasis on performance, maintainability, and solving real business problems.",
  primaryCta: {
    label: "View my work",
    href: "/projects",
  },
  secondaryCta: {
    label: "More about me",
    href: "/about",
  },
  tech: [
    "ASP.NET Core",
    "C#",
    "React",
    "TypeScript",
    "SQL",
    "Astro",
    "Azure",
  ],
};
