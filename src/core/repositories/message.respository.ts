import { Database } from "../../config/database";
import type { Message } from "../../generated/prisma/client";

export class MessageRepository {
  private table = Database.message;

  async create(Message: Message) {
    return await this.table.create({ data: Message });
  }

  async getAll() {
    return await this.table.findMany();
  }
}