import type { Project } from '../../generated/prisma/client';
import type { HttpErrorResponse, HttpResponse } from '../../utils/httpResponses';
import { ProjectRepository } from '../repositories/project.repository';

export class ProjectService {
  private repository: ProjectRepository;

  constructor() {
    this.repository = new ProjectRepository();
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

  async getAll(): Promise<any | HttpErrorResponse> {
    try {
      const projects = await this.repository.getAll();
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