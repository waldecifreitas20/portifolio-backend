import { Database } from "../../config/database.js";
import type { Technology } from "../../types/Technology.js";

export class TechRepository {
  private table = Database.technology;

  async create(tech: Technology) {
    return await this.table.create({
      data: {
        name: tech.name,
        desc: tech.description,
        desc_en: tech.description_en,
        hexColor: tech.hexColor,
        officialWebsite: tech.officialWebsite,
        logoUrl: tech.logoUrl,
        isBackend: tech.isBackend,
        isFrontend: !!tech.isFrontend,
      }
    });
  }

  async getAll(minimal?: boolean) {
    const select = minimal ? {
      select: {
        id: true,
        name: true,
      }
    } : undefined;

    return await this.table.findMany(select);
  }

  async clear() {
    return await this.table.deleteMany();
  }
}