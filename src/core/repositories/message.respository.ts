import { Database } from "../../config/database";
import type { Message } from "../../generated/prisma/client";

export class MessageRepository {

  async create(Message: Message) {
    return await Database.message.create({ data: Message });
  }
}