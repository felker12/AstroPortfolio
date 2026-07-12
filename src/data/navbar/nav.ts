export interface NavLink {
    href: string;
    label: string;
    ariaLabel: string;
    children?: NavLink[];
}

export const navLinks: NavLink[] = [
  { 
    href: "/", 
    label: "Home", 
    ariaLabel: "Home – Kevin Anthony Felker Portfolio" 
  },
  { 
    href: "/about", 
    label: "About", 
    ariaLabel: "About Kevin Anthony Felker" 
  },
  { 
    href: "/projects", 
    label: "Projects", 
    ariaLabel: "Software Development Projects", 
    children: [
        {
            href: "/projects/portfolio-generator", 
            label: "Portfolio Generator", 
            ariaLabel: "Portfolio Generator Case Study" 
            },
            { 
            href: "/projects/time-punch", 
            label: "Time Punch", 
            ariaLabel: "Time Punch Management System Case Study" 
            },
            { 
            href: "/projects/rpg-engine", 
            label: "RPG Engine", 
            ariaLabel: "Modular 2D RPG Engine Case Study" 
            },
            { 
            href: "/projects/legacy-portfolio", 
            label: "Legacy Portfolio", 
            ariaLabel: "Legacy ASP.NET Portfolio Case Study" 
        }
    ]
  },
  { 
    href: "/skills", 
    label: "Skills", 
    ariaLabel: "Technical Skills" 
  },
  { 
    href: "/contact", 
    label: "Contact", 
    ariaLabel: "Contact Kevin Anthony Felker" 
  },
];