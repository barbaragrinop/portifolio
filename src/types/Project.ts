export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  type: string;
  status: "production" | "development" | "pending";
  year: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};