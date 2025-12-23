import { Database } from "../../config/database.js";
import type { Skill } from "../../types/Skill.js";

export class SkillRepository {
  private table = Database.skill;

  async create(skill: Skill) {
    return await this.table.create({
      data: {
        name: skill.pt,
        name_en: skill.en
      }
    });
  }

  async createMany(skills: Array<Skill>) {
    return await this.table.createMany({
      data: skills.map(skill => ({
        name: skill.pt,
        name_en: skill.en
      }))
    });
  }

  async getAll() {
    return await this.table.findMany();
  }

  async clear() {
    return await this.table.deleteMany();
  }
}