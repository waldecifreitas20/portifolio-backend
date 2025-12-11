import { Database } from "../config/database";

export class CategoryRepository {

  async create(name: string) {
    return await Database.projectCategory
      .create({ data: { name } })
      .finally(() => Database.$disconnect());
  }

  async delete(id: string) {
    return await Database.projectCategory.delete({ where: { id: id } });
  }
}