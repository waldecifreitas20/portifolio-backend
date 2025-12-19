import { Router } from 'express';
import { AdminSkillRouter } from './skill.routes.js';
import { AdminMessageRouter } from './message.routes.js';
import { AdminProjectRouter } from './project.routes.js';
import { AdminTechnologyRouter } from './tech.routes.js';

const adminRouter = Router();

adminRouter.use('/projects', AdminProjectRouter);
adminRouter.use('/tech', AdminTechnologyRouter);
adminRouter.use('/messages', AdminMessageRouter);
adminRouter.use('/skills', AdminSkillRouter);

export { adminRouter };
