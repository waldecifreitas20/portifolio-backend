import { getDatabaseError } from './../../utils/databaseErrors';
import type { CreateTechnologyDto } from "../../dto/technology.dto";
import { AppResponse } from "../../utils/responses";
import { TechRepository } from "../repositories/tech.repository";

export class TechnologyService {
  private repository: TechRepository;

  constructor() {
    this.repository = new TechRepository();
  }

  async create(technology: CreateTechnologyDto): Promise<AppResponse> {
    try {
      await this.repository.create(technology);

      return new AppResponse('success');

    } catch (error: any) {
      const errorMessage = error.code ? getDatabaseError(error.code) : 'Internal Server Error';

      return new AppResponse({ error: errorMessage }, 502);
    }
  }


}