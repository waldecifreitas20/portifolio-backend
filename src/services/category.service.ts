import { CategoryRepository } from './../repositories/category.repository';
import type { HttpErrorResponse, HttpResponse } from '../utils/httpResponses';

export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async create(category: string): Promise<HttpResponse | HttpErrorResponse> {
    try {
      await this.categoryRepository.create(category);

      return {
        message: 'success',
        status: 200,
      }
    } catch (error) {
      console.error(error);
      return {
        error: 'internal error',
        status: 502
      }
    }
  }

  async delete(categoryId: string) {
    try {
      await this.categoryRepository.delete(categoryId);

      return {
        status: 201,
      }
    } catch (error) {
      console.error(error);
      return {
        error: 'internal error',
        status: 502
      }
    }
  }
}