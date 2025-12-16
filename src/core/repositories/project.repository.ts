import { Database } from '../../config/database';
import type { CreateProjectDto } from '../../dto/projects.dto';

export class ProjectRepository {
  private table = Database.project;

  async create(project: CreateProjectDto) {
    const { categoryId, technologies, skills, ...data } = project;

    return await this.table.create({
      data: {
        fkCategoryId: categoryId,
        technologies: { connect: [...technologies.map(id => ({ id }))] },
        skills: { connect: [...skills.map(id => ({ id }))] },
        ...data
      },
      include: {
        category: true,
        skills: true,
        technologies: true,
      },
    });
  }

  async delete(id: number) {
    return await this.table.delete({
      where: { id },
      include: {
        category: true,
        skills: true,
        technologies: true,
      } 
    });
  }

  async getAll() {
    return await this.table.findMany({
      include: {
        category: true,
        skills: true,
        technologies: true,
      }
    });
  }
}