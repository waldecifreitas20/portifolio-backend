import { Database } from "../config/database";

export class CategoryRepository {

  async create(name: string) {
    return await Database.projectCategory
      .create({ data: { name } })
      .finally(() => Database.$disconnect());
  }
}