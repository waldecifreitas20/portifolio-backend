import type { GetAllProjectsResponse, ProjectDto } from '../../dto/projects.dto';
import type { Project } from '../../generated/prisma/client';
import type { HttpErrorResponse, HttpResponse } from '../../utils/httpResponses';
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

  async create(project: Project): Promise<HttpResponse | HttpErrorResponse> {
    try {
      await this.repository.create(project);
      return {
        status: 201,
        message: 'created',
      }
    } catch (error) {
      console.error(error);
      return {
        status: 502,
        error: 'Internal server error',
      }
    }
  }

  async getAll(): Promise<GetAllProjectsResponse | HttpErrorResponse> {
    try {
      const response = await this.repository.getAll();

      const projects: Array<ProjectDto> = response
        .map(project => this.formatToResponse(project));

      return {
        status: 200,
        projects,
      }
    } catch (error) {
      console.error(error);
      return {
        status: 502,
        error: 'Internal server error',
      }
    }
  }
}