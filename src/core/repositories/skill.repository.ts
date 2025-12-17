import { Database } from "../../config/database";

export class SkillRepository {
  private table = Database.skill;

  async create(skill: string) {
    return await this.table.create({ data: { name: skill } });
  }

  async createMany(skills: Array<string>) {
    return await this.table.createMany({
      data: skills.map(skill => ({ name: skill }))
    });
  }
}