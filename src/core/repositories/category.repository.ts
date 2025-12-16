import { Database } from '../../config/database';

export class CategoryRepository {

  async create(name: string) {
    return await Database.projectCategory
      .create({ data: { name } })
      .finally(() => Database.$disconnect());
  }

  async delete(id: number) {
    return await Database.projectCategory.delete({
      where: { id, },
      include: {
        project: true,
      }
    });
  }
}