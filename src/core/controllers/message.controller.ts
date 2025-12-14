import { sendResponse } from '../../utils/responses';
import { MessageService } from '../services/message.service';

export class MessageController {
  private service: MessageService = new MessageService();

  create = async (req: any, res: any) => {
    const message = req.body;
    const response = await this.service.save(message);

    return sendResponse(res, response);
  }

  getAll = async (req: any, res: any) => {
    return res.json({ messages: [] });
  }
}