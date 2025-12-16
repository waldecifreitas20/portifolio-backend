import { sendResponse } from "../../utils/responses";
import { TechnologyService } from "../services/tech.service";

export class TechnologyController {
  private service = new TechnologyService();;


  create = async (req: any, res: any) => {
    const tech = req.body;
    const response = await this.service.create(tech);

    return sendResponse(res, response);
  }

  getAll = async (req: any, res: any) => {
    const response = await this.service.getAll();
    return sendResponse(res, response);
  }

}