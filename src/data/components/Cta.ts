export interface CtaLink {
  label: string;
  href: string;
}

export interface CtaSection {
  eyebrow: string;
  title: string;
  body: string;
  primary: CtaLink;
  secondary: CtaLink;
  signature: { name: string; label: string };
}

export const cta: CtaSection = {
  eyebrow: "Have a project or opportunity?",
  title: "Let's build something useful.",
  body:
    "Whether you need a software engineer, a modern business website, or help turning an idea into a working system, I'd be glad to hear about it.",
  primary: { label: "Start a conversation", href: "/contact" },
  secondary: { label: "Browse projects", href: "/projects" },
  signature: { name: "Kevin \"Anthony\" Felker", label: "Software Engineer & Web Developer" },
};