import { Database } from '../../config/database';

export class CategoryRepository {
  private table = Database.projectCategory;

  async create(name: string) {
    return await this.table
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