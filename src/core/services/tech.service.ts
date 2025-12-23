import { getDatabaseError } from './../../utils/databaseErrors.js';
import type { Technology } from "../../types/Technology.js";
import { AppResponse } from "../../utils/responses.js";
import { TechRepository } from "../repositories/tech.repository.js";

export class TechnologyService {
  private repository: TechRepository;

  constructor() {
    this.repository = new TechRepository();
  }

  async create(technology: Technology): Promise<AppResponse> {
    try {
      const { id } = await this.repository.create(technology);
      return new AppResponse({ message: 'success', techId: id });

    } catch (error: any) {
      console.error(error);
      
      const errorMessage =
        error.code ?
          getDatabaseError(error.code)
          : 'Internal Server Error';

      return new AppResponse({ error: errorMessage }, 502);
    }
  }


  async getAll(isMinimal?: boolean) {
    try {
      const technologies = await this.repository.getAll(Boolean(isMinimal));
      return new AppResponse({ total: technologies.length, technologies, });

    } catch (error: any) {

      console.error(error);
      return new AppResponse({ error: 'internal server error' }, 502);
    }

  }
}