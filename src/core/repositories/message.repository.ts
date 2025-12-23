import { Database } from "../../config/database.js";
import type { Message } from "../../generated/prisma/client.js";

export class MessageRepository {
  private table = Database.message;

  async create(Message: Message) {
    return await this.table.create({ data: Message });
  }

  async getAll() {
    return await this.table.findMany();
  }

  async clear() {
    return await this.table.deleteMany();
  }
}