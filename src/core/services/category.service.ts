import { CategoryRepository } from '../repositories/category.repository';
import { AppResponse, } from '../../utils/responses';

export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async create(category: string): Promise<AppResponse> {
    try {
      const { id } = await this.categoryRepository.create(category);

      return new AppResponse({ message: 'success', categoryId: id });
    } catch (error) {
      console.error(error);
      return new AppResponse({ error: 'internal error' }, 502);
    }
  }

  async delete(categoryId: number) {
    try {
      await this.categoryRepository.delete(categoryId);

      return new AppResponse('deleted with success', 204);
    } catch (error) {
      console.error(error);
      return new AppResponse({ error: 'internal error' }, 502);
    }
  }
}