import { AppResponse } from "../../utils/responses";
import { SkillRepository } from "../repositories/skill.repository";

export class SkillService {
  private repository = new SkillRepository();

  async create(skills: string | Array<string>) {

    console.log(skills);

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
}