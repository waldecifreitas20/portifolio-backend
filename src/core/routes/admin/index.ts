import { Router } from 'express';
import { AdminSkillRouter } from './skill.routes.js';
import { AdminMessageRouter } from './message.routes.js';
import { AdminProjectRouter } from './project.routes.js';
import { AdminTechnologyRouter } from './tech.routes.js';
import { AdminMiddleware } from '../../middlewares/admin.middleware.js';
import { clearTableService } from '../../services/clearTables.service.js';

const adminRouter = Router();

adminRouter.use('/projects', AdminProjectRouter);
adminRouter.use('/tech', AdminTechnologyRouter);
adminRouter.use('/messages', AdminMessageRouter);
adminRouter.use('/skills', AdminSkillRouter);

const { checkCredentials } = new AdminMiddleware();

adminRouter.delete('/clear-all', checkCredentials, async (req, res) => {
  const response = await clearTableService();
  return res.status(response.status).json(response);
});

export { adminRouter };
