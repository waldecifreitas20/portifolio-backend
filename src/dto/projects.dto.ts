import type { TechnologyDto } from "./technology.dto";

export interface GetAllProjectsResponse {
  status: number;
  projects: Array<ProjectDto>;
}

export interface ProjectDto {
  id: string,
  name: string,
  description: string,
  repositoryUrl: string,
  deployUrl: string,
  thumbnailUrl: string,
  category: string
  skills: Array<string>,
  technologies: Array<TechnologyDto>
}