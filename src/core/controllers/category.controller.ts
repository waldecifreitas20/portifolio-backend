import { sendResponse } from '../../utils/responses.js';
import { CategoryService } from '../services/category.service.js';

export class CategoryController {
  private services: CategoryService;

  constructor() {
    this.services = new CategoryService();
  }

  create = async (req: any, res: any) => {
    const { category_pt, category_en } = req.body;
    const response = await this.services.create(category_pt, category_en);

    return sendResponse(res, response);
  }

  remove = async (req: any, res: any) => {
    const { id } = req.params;
    const response = await this.services.delete(id);

    return sendResponse(res, response);
  }

}
