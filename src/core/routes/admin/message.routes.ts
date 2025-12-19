import { Router } from 'express';
import { AdminMiddleware } from '../../middlewares/admin.middleware.js';
import { MessageController } from '../../controllers/message.controller.js';


const router = Router();
const controller = new MessageController();
const middleware = new AdminMiddleware();

router.get('/all', middleware.checkCredentials, controller.getAll);


export const AdminMessageRouter = router;