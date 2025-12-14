import { Router } from 'express';
import { AdminProjectRouter } from './project.routes';
import { AdminTechnologyRouter } from './tech.routes';

const adminRouter = Router();

adminRouter.use('/projects', AdminProjectRouter);
adminRouter.use('/tech', AdminTechnologyRouter);

export { adminRouter };
