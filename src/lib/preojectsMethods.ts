type ProjectType = {
  id: string;
  name: string;
  description: string;
  images: string[];
  github: string;
  url?: string;
  technologies: string[];
  visibility: "VISIBLE" | "INVISIBLE";
  createdAt: string;
  updatedAt: string;
};

export function filterVisibleProjects(projects: ProjectType[]): ProjectType[] {
  return projects.filter((project) => project.visibility === "VISIBLE");
}

export function getLastFourOrLess<T>(array: T[]): T[] {
  return array.slice(-4);
}
