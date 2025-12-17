import { sendResponse } from "../../utils/responses";
import { SkillService } from "../services/skill.service";

export class SkillController {
  private services = new SkillService();

  create = async (req: any, res: any) => {
    const { skills } = req.body;
    const response = await this.services.create(skills);

    return sendResponse(res, response);
  }

  getAll = async (req: any, res: any) => {
    const response = await this.services.getAll();
    return sendResponse(res, response);
  }
}