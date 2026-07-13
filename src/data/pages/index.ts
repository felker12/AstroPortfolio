export interface linkItem {
  title: string;
  link: string;
}

export interface displayItem {
  title: string;
  text: string;
  linkItem: linkItem;
}

export const displayItems: Array<displayItem> = [
  {
    title: "About Me",
    text: "I'm a passionate developer with expertise in web development, software engineering, and problem-solving.",
    linkItem: {
      title: "Learn About Me",
      link: "/about",
    },
  },
  {
    title: "Projects",
    text: "Check out my latest projects and see how I can help you achieve their goals.",
    linkItem: {
      title: "View Projects",
      link: "/projects",
    },
  },
  {
    title: "Contact",
    text: "Let's connect! I'm always open to discussing new projects and opportunities.",
    linkItem: {
      title: "Contact Me",
      link: "/contact",
    },
  }
];

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kevin Anthony Felker Portfolio",
  url: "https://anthonyfelker.com"
};