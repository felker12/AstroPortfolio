export interface ProjectHeroData {
    category: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
}

export interface FlowStep {
    title: string;
    description: string;
}

export interface Feature {
    title: string;
    description: string;
}

export interface TechnicalHighlight {
    title: string;
    description: string;
}

export interface Challenge {
    title: string;
    description: string;
}

export interface Screenshot {
    src: string;
    width: number;
    height: number;
    alt: string;
}

export interface ProjectFlowData {
    title: string;
    subtitle: string;
    description: string;
    workflow: FlowStep[];
}