import { Router } from 'express';
import { MessageController } from '../controllers/message.controller.js';


const router = Router();
const controller = new MessageController();

router.post('/send', controller.create);


export const MessageRouter = router;