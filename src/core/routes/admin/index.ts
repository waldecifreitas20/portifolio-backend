import { Router } from 'express';
import { AdminMessageRouter } from './message.routes';
import { AdminProjectRouter } from './project.routes';
import { AdminTechnologyRouter } from './tech.routes';

const adminRouter = Router();

adminRouter.use('/projects', AdminProjectRouter);
adminRouter.use('/tech', AdminTechnologyRouter);
adminRouter.use('/messages', AdminMessageRouter);

export { adminRouter };
