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
  eyebrow: "C# · .NET · TypeScript · React · Astro",
  titleHtml: "I build dependable software and <em>modern web experiences.</em>",
  body:
    "I'm Kevin Anthony Felker, a software engineer and web developer focused on full-stack .NET applications, production websites, API development, and solving real-world technical problems.",
  primaryCta: { label: "View my work", href: "/projects" },
  secondaryCta: { label: "More about me", href: "/about" },
  tech: ["ASP.NET Core", "C#", "React", "TypeScript", "SQL", "Azure"],
};