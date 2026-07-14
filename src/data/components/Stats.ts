export interface StatItem {
  value: string;
  label: string;
}

export interface StatsContent {
  number: string;
  eyebrow: string;
  titleHtml: string;
  items: StatItem[];
}

export const stats: StatsContent = {
  number: "04",
  eyebrow: "By the numbers",
  titleHtml:
    "Experience supported by <em>working systems.</em>",
  items: [
    {
      value: "10k+",
      label: "Lines in a custom C# game engine",
    },
    {
      value: "4×100",
      label: "Perfect Lighthouse category scores",
    },
    {
      value: "5+",
      label: "Production business websites",
    },
    {
      value: "5+",
      label: "Years supporting critical systems",
    },
  ],
};