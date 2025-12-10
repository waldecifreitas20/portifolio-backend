import { CategoryRepository } from './../repositories/category.repository';
import type { ProjectCategory } from "../generated/prisma/client";
import type { HttpErrorResponse, HttpResponse } from '../types/httpResponses';

export class CategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async create(category: ProjectCategory): Promise<HttpResponse | HttpErrorResponse> {
    try {
      await this.categoryRepository.create(category.name);
      return {
        message: 'success',
        status: 200,
      }
    } catch (error) {
      console.error(error);
      return {
        error: 'internal serve',
        status: 502
      }
    }
  }
}