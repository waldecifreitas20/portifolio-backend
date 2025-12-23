import { type Project as Model } from './../../generated/prisma/client';
import type { Project } from '../../types/Project';
import { getDatabaseError } from '../../utils/databaseErrors.js';
import { AppResponse } from '../../utils/responses.js';
import { ProjectRepository } from '../repositories/project.repository.js';
import type { Skill } from '../../types/Skill';

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
      thumbnailUrl: projectScheme.thumbnailUrl,


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
          skills: data.skills.map(skill => {
            return {
              en: skill.name_en,
              pt: skill.name
            }
          }),
          technologies: data.technologies,
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