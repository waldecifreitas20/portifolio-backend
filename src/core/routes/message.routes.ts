import { Router } from 'express';
import { MessageController } from '../controllers/message.controller';


const router = Router();
const controller = new MessageController();

router.post('/send', controller.create);


export const MessageRouter = router;