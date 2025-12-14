import { Router } from 'express';
import { TechnologyController } from '../../controllers/technology.controller';
import { AdminMiddleware } from '../../middlewares/admin.middleware';

const router = Router();
const controller = new TechnologyController();
const middleware = new AdminMiddleware();

router.post('/add', middleware.checkCredentials, controller.create);

export const AdminTechnologyRouter = router;