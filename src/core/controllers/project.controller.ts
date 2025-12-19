import { sendResponse } from '../../utils/responses.js';
import { ProjectService } from '../services/project.service.js';

export class ProjectController {
  private services: ProjectService;

  constructor() {
    this.services = new ProjectService();
  }

  create = async (req: any, res: any) => {
    const project = req.body;
    const response = await this.services.create(project);
    return sendResponse(res, response);

  }

  delete = async (req: any, res: any) => {
    const { id } = req.params;
    const response = await this.services.delete(id);
    return sendResponse(res, response);
  }

  getAll = async (req: any, res: any) => {
    const response = await this.services.getAll();
    return sendResponse(res, response);
  }
}