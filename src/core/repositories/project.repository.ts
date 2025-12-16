import { Database } from '../../config/database';
import type { CreateProjectDto } from '../../dto/projects.dto';

export class ProjectRepository {
  async create(project: CreateProjectDto) { 
    const {categoryId, technologies, skills, ...data} = project;

    return await Database.project.create({
      data: {
        fkCategoryId: categoryId,
        technologies: { connect: [...technologies.map(id => ({ id }))] },
        skills: { connect: [...skills.map(id => ({ id }))]},
        ...data        
      },
      include: {
        category: true,
        skills: true,
        technologies: true,
      },
    });
  }

  async getAll() {
    return await Database.project.findMany({
      include: {
        category: true,
        skills: true,
        technologies: true,
      }
    });
  }
}