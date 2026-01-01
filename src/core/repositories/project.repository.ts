import { Database } from '../../config/database.js';
import type { Project } from '../../types/Project.js';

export class ProjectRepository {
  private table = Database.project;
  private relationships = {
    category: true,
    technologies: true,
  }

  async create(project: Project) {
    const { categoryId, technologies, skills, ...data } = project;

    return await this.table.create({
      data: {
        fkCategoryId: categoryId,
        technologies: { connect: [...technologies.map(id => ({ id }))] },
        deployUrl: data.deployUrl,
        desc: data.description,
        desc_en: data.description_en,
        name: data.name,
        repositoryUrl: data.repositoryUrl,
        thumbnailUrl: data.thumbnailUrl,
      },
      include: this.relationships,
    });
  }

  async delete(id: number) {
    return await this.table.delete({
      where: { id },
      include: this.relationships,
    });
  }

  async getAll() {
    return await this.table.findMany({
      include: {
        technologies: {
          include: {
            skills: {
              select: { name: true, name_en: true }
            }
          },
        },
        category: true,
      }
    });
  }

  async clear() {
    return await this.table.deleteMany();
  }
}