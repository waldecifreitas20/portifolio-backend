import type { Message } from "../../generated/prisma/client";
import { AppResponse } from "../../utils/responses";
import { MessageRepository } from "../repositories/message.respository";

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
}