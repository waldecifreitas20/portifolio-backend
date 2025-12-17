import type { CreateProjectDto } from '../../dto/projects.dto';
import { getDatabaseError } from '../../utils/databaseErrors';
import { AppResponse } from '../../utils/responses';
import { ProjectRepository } from '../repositories/project.repository';

export class ProjectService {
  private repository: ProjectRepository;

  constructor() {
    this.repository = new ProjectRepository();
  }


  private formatToResponse(projectScheme: any) {
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

  async create(project: CreateProjectDto): Promise<AppResponse> {
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

      const projects = response
        .map(project => this.formatToResponse(project));

      return new AppResponse({ total: projects.length, projects,  });
    } catch (error) {
      console.error(error);
      return new AppResponse({ error: 'internal error' }, 502);

    }
  }

  async delete(projectId: number) {
    try {
      await this.repository.delete(Number(projectId));

      return new AppResponse(undefined, 204);
    } catch (error: any) {
      console.error(error);

      const errorMessage =
        error.code ?
          getDatabaseError(error.code)
          : 'Internal Server Error';

      return new AppResponse({ error: errorMessage }, 502);
    }
  }
}