import { Database } from "../../config/database";
import type { CreateTechnologyDto } from "../../dto/technology.dto";

export class TechRepository {

  async create(tech: CreateTechnologyDto) {
    return await Database.technology.create({ data: tech });
  }
}