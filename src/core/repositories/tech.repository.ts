import { Database } from "../../config/database";
import type { CreateTechnologyDto } from "../../dto/technology.dto";

export class TechRepository {
  private table = Database.technology;

  async create(tech: CreateTechnologyDto) {
    return await this.table.create({ data: tech });
  }

  async getAll() {
    return await this.table.findMany();
  }
}