import { Router } from 'express';
import { ProjectRouter } from './project.routes';
import { AdminTechnologyRouter } from './tech.routes';

const adminRouter = Router();

adminRouter.use('/projects', ProjectRouter);
adminRouter.use('/tech', AdminTechnologyRouter);

export { adminRouter };
