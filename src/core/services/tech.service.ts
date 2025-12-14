import { getDatabaseError } from './../../utils/databaseErrors';
import type { CreateTechnologyDto } from "../../dto/technology.dto";
import type { HttpErrorResponse, HttpResponse } from "../../utils/httpResponses";
import { TechRepository } from "../repositories/tech.repository";

export class TechnologyService {
  private repository: TechRepository;

  constructor() {
    this.repository = new TechRepository();
  }

  async create(technology: CreateTechnologyDto): Promise<HttpResponse | HttpErrorResponse> {
    try {
      await this.repository.create(technology);

      return {
        status: 201,
      }
    } catch (error: any) {
      const errorMessage = error.code ? getDatabaseError(error.code) : 'Internal Server Error';

      return {
        status: 502,
        error: errorMessage
      }
    }
  }


}