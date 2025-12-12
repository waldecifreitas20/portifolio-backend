import { Database } from '../../config/database';
import type { Project } from '../../generated/prisma/client';

export class ProjectRepository {
  async create(project: Project) {
    return await Database.project.create({ data: project });
  }
}