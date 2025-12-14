import type { GetAllProjectsResponse, ProjectDto } from '../../dto/projects.dto';
import type { Project } from '../../generated/prisma/client';
import { AppResponse } from '../../utils/responses';
import { ProjectRepository } from '../repositories/project.repository';

export class ProjectService {
  private repository: ProjectRepository;

  constructor() {
    this.repository = new ProjectRepository();
  }


  private formatToResponse(projectScheme: any): ProjectDto {
    return {
      id: projectScheme.id,
      category: projectScheme.category.name,
      deployUrl: projectScheme.deployUrl,
      description: projectScheme.description,
      name: projectScheme.name,
      repositoryUrl: projectScheme.repositoryUrl,
      skills: projectScheme.skills.map((skill: any) => skill.name),
      technologies: projectScheme.technologies,
      thumbnailUrl: projectScheme.thumbnailUrl
    }
  }

  async create(project: Project): Promise<AppResponse> {
    try {
      const { id } = await this.repository.create(project);
      return new AppResponse({ projectId: id }, 201);
    } catch (error) {
      console.error(error);

      return new AppResponse({ error: 'internal error' }, 502);
    }
  }

  async getAll(): Promise<AppResponse> {
    try {
      const response = await this.repository.getAll();

      const projects: Array<ProjectDto> = response
        .map(project => this.formatToResponse(project));

      return new AppResponse({ projects });
    } catch (error) {
      console.error(error);
      return new AppResponse({ error: 'internal error' }, 502);

    }
  }
}