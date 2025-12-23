import { Database } from '../../config/database.js';
import type { CreateProjectDto } from '../../dto/projects.dto.js';

export class ProjectRepository {
  private table = Database.project;
  private relationships = {
    category: true,
    skills: true,
    technologies: true,
  }

  async create(project: CreateProjectDto) {
    const { categoryId, technologies, skills, ...data } = project;

    return await this.table.create({
      data: {
        fkCategoryId: categoryId,
        technologies: { connect: [...technologies.map(id => ({ id }))] },
        skills: { connect: [...skills.map(id => ({ id }))] },
        ...data
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
      include: this.relationships,
    });
  }

  async clear() {
    return await this.table.deleteMany();
  }
}