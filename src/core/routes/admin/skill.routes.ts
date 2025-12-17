import { Router } from 'express';
import { SkillController } from '../../controllers/skill.controller';
import { AdminMiddleware } from '../../middlewares/admin.middleware';

const router = Router();
const controller = new SkillController();
const middleware = new AdminMiddleware();

router.post('/add', middleware.checkCredentials, controller.create);

export const AdminSkillRouter = router;
