import type {
  ProjectHeroData,
  Screenshot,
  Feature,
  FlowStep,
  TechnicalHighlight,
  Challenge
} from '@data/projects/projects';

const screenshotroot = "/projectpics/engine/";

const screenshots: Screenshot[] = [
  {
    src: `${screenshotroot}gameplay.png`,
    width: 1920,
    height: 1080,
    alt: "2D RPG engine gameplay scene"
  },
  {
    src: `${screenshotroot}combat.png`,
    width: 1920,
    height: 1080,
    alt: "2D RPG engine combat system"
  },
  {
    src: `${screenshotroot}combat2.png`,
    width: 1920,
    height: 1080,
    alt: "2D RPG engine combat 2nd picture system"
  },
  {
    src: `${screenshotroot}pause.png`,
    width: 1920,
    height: 1080,
    alt: "2D RPG engine pause menu"
  },
  {
    src: `${screenshotroot}actionbarPage.png`,
    width: 1920,
    height: 1080,
    alt: "2D RPG engine action bar page"
  },
  {
    src: `${screenshotroot}skillspage.png`,
    width: 1920,
    height: 1080,
    alt: "2D RPG engine skills page"
  },
  {
    src: `${screenshotroot}questsPage.png`,
    width: 1920,
    height: 1080,
    alt: "2D RPG engine quests page"
  },
];

export const visibleScreenshots = screenshots.filter((pic) => pic.src.trim() !== "");

export const hero: ProjectHeroData = {
  category: "Game Engine Architecture Project",
  title: "Modular 2D RPG Engine",
  description:
    "A custom 2D RPG engine built with C#, MonoGame, XML, and xUnit, focused on modular systems for rendering, input, animation, combat, persistence, and content editing.",
  tags: ["C#", "MonoGame", "xUnit.net", "XML", "WinForms"],
  githubUrl: "https://github.com/felker12/SkeletonsAdventure"
};

export const features: Feature[] = [
  {
    title: "Modular Engine Systems",
    description:
      "Separated rendering, input, combat, animation, state management, and persistence into organized systems for easier maintenance."
  },
  {
    title: "Custom Combat Logic",
    description:
      "Built reusable combat components for attacks, player actions, hit detection, and enemy interactions."
  },
  {
    title: "Animation System",
    description:
      "Created sprite animation handling for character movement, directional animation states, and reusable animated objects."
  },
  {
    title: "Save / Load Persistence",
    description:
      "Used XML-based persistence to store and reload game data across play sessions."
  },
  {
    title: "WinForms Editor Tool",
    description:
      "Developed a companion editor tool to speed up content creation and reduce manual configuration work."
  },
  {
    title: "Unit Testing",
    description:
      "Used xUnit tests to validate core systems and reduce regressions during iterative development."
  }
];

export const flow: {
  title: string;
  subtitle: string;
  description: string;
  workflow: FlowStep[];
} = {
  title: "Engine Flow",
  subtitle: "From Input to Rendered Gameplay",
  description:
    "The engine processes player input, updates game state, handles combat and animation logic, then renders the updated scene through MonoGame.",
  workflow: [
    {
      title: "Input",
      description: "Capture keyboard and player controls."
    },
    {
      title: "Update",
      description: "Apply game logic and state changes."
    },
    {
      title: "Combat",
      description: "Resolve attacks, collisions, and interactions."
    },
    {
      title: "Animate",
      description: "Update sprite frames and movement states."
    },
    {
      title: "Render",
      description: "Draw the updated scene through MonoGame."
    }
  ]
};

export const technicalHighlights: TechnicalHighlight[] = [
  {
    title: "MonoGame Rendering",
    description:
      "Used MonoGame to render 2D gameplay scenes, sprites, shapes, and user interface elements."
  },
  {
    title: "C# Engine Architecture",
    description:
      "Organized the codebase into separate systems for rendering, input, animation, combat, state management, and persistence."
  },
  {
    title: "XML Data Persistence",
    description:
      "Used XML to store structured game data and support save/load workflows."
  },
  {
    title: "Geometry & Collision Logic",
    description:
      "Implemented reusable shape and collision logic for gameplay objects, attacks, and interaction checks."
  },
  {
    title: "WinForms Tooling",
    description:
      "Built a desktop editor utility to support faster content creation and reduce repetitive setup work."
  },
  {
    title: "xUnit Testing",
    description:
      "Added unit tests around core systems to improve reliability during ongoing refactoring and feature development."
  }
];

export const challenges: Challenge[] = [
  {
    title: "Managing Engine Complexity:",
    description:
      "As the project grew, keeping rendering, input, combat, animation, and persistence organized required breaking the code into smaller reusable systems."
  },
  {
    title: "Building Reusable Game Systems:",
    description:
      "Creating systems that worked across different gameplay objects helped me better understand abstraction, composition, and object-oriented design."
  },
  {
    title: "Improving Content Creation:",
    description:
      "Manually configuring game data became time-consuming, so I built a WinForms editor tool to make content setup faster and more consistent."
  }
];

export const futureImprovements = [
  "Expand map editor features",
  "Add more enemy behaviors",
  "Improve combat balancing",
  "Add inventory and quest systems",
  "Improve asset loading pipeline",
  "Package playable demo"
];