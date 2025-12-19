import { AppResponse } from "../../utils/responses.js";
import { SkillRepository } from "../repositories/skill.repository.js";

export class SkillService {
  private repository = new SkillRepository();

  async create(skills: string | Array<string>) {
    try {
      if (typeof skills === 'string') {
        await this.repository.create(skills);
      } else {
        await this.repository.createMany(skills);
      }

      return new AppResponse(undefined, 201);
    } catch (error) {
      console.error(error);

      return new AppResponse({ error: 'internal several error' }, 502);
    }
  }

  async getAll() {
    try {
      const skills = await this.repository.getAll();

      return new AppResponse({ skills });
    } catch (error) {
      console.error(error);
      return new AppResponse({ error: 'internal several error' }, 502);
    }
  }
}