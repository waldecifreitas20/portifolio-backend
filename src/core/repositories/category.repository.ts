import { Database } from '../../config/database.js';

export class CategoryRepository {
  private table = Database.projectCategory;

  async create(ptName: string, enName: string) {
    return await this.table
      .create({
        data: {
          name: ptName,
          name_en: enName,
        }
      })
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

  async clear() {
    return await this.table.deleteMany();
  }
}