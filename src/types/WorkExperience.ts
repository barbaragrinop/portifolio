export type WorkExperience = {
    id: string;
    role: string;
    company: string;
    period: string;
    duration: string;
    location: string;
    current?: boolean;
    description: string[];
    tags: string[];
}