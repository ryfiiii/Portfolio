export interface Skill {
    name: string;
    icon: string;
    level: number;
}

export interface Creation {
    name: string;
    image: string;
    description: string;
    link: string | null;
    github: string | null;
    stack: string[];
}