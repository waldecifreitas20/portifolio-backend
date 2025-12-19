import type { Message } from "../../generated/prisma/client.js";
import { AppResponse } from "../../utils/responses.js";
import { MessageRepository } from "../repositories/message.repository.js";

export class MessageService {
  private repository: MessageRepository = new MessageRepository();

  async save(message: Message): Promise<AppResponse> {
    try {
      await this.repository.create(message);
      return new AppResponse('message saved');
    } catch (error) {
      console.error(error);
      return new AppResponse({ error: 'unable to save' }, 502);
    }
  }

  async getAll() {
    try {
      const messages = await this.repository.getAll();
      return new AppResponse({ messages });
    } catch (error) {
      console.error(error);
      return new AppResponse({ error: 'internal server error' }, 502);
    }
  }
}