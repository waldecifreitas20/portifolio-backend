import { ProjectService } from '../services/project.service';

export class ProjectController {
  private services: ProjectService;

  constructor() {
    this.services = new ProjectService();
  }

  create = async (req: any, res: any) => {
    const project = req.body;
    const response = await this.services.create(project);
    return res.status(response.status).json(response);
  }

  update = async (req: Request, res: any) => {
    return res.json({ msg: 'ONLY ADMIN IS ALLOWED TO ACCESS THIS ROUTE' });
  }

  getAll = async (req: Request, res: any) => {
    return res.json({ projects: [] });
  }
}