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
    } catch (error) {
      console.error(error);

      return {
        status: 502,
        error: 'Internal Server Error'
      }
    }
  }

  
}