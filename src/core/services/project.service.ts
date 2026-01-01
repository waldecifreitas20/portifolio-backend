import type { Project } from '../../types/Project';
import { getDatabaseError } from '../../utils/databaseErrors.js';
import { AppResponse } from '../../utils/responses.js';
import { ProjectRepository } from '../repositories/project.repository.js';

export class ProjectService {
  private repository: ProjectRepository;

  constructor() {
    this.repository = new ProjectRepository();
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

      const projects = response.map(data => {

        return {
          id: data.id,
          category: data.category.name,
          deployUrl: data.deployUrl,
          description: {
            en: data.desc_en,
            pt: data.desc,
          },
          name: data.name,
          repositoryUrl: data.repositoryUrl,
          technologies: data.technologies.map(tech => ({
            ...tech,
            skills: tech.skills.map(skill => ({
              pt: skill.name, en: skill.name_en
            })),
          })),
          thumbnailUrl: data.thumbnailUrl,
        }
      }
      );

      return new AppResponse({ total: projects.length, projects, });
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