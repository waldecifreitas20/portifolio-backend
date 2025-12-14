import { TechnologyService } from "../services/tech.service";

export class TechnologyController {
  private service = new TechnologyService();;


  create = async (req: any, res: any) => {
    const tech = req.body;
    const response = await this.service.create(tech);

    return res
      .status(response.status)
      .json({
        status: response.status,
        ...response.payload,
      });
  }

  getAll = async (req: any, res: any) => {
    return res
      .status(201)
      .json({ msg: '200 ok' });
  }

}