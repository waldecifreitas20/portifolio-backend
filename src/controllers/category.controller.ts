import { CategoryService } from "../services/category.service";

export class CategoryController {
  private services: CategoryService;

  constructor() {
    this.services = new CategoryService();
  }

  async create(req: any, res: any) {
    const { category_name } = req.body;
    const response = await this.services.create(category_name);

    return res.status(response.status).json(response);
  }

  async remove(req: Request, res: any) {
    return res.json({ msg: 'only admim can access this route' })
  }

}
