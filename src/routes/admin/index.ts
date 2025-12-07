import { Router } from "express";
import { ProjectRouter } from "./project.routes";


const adminRouter = Router();

adminRouter.use('/projects', ProjectRouter);

export { adminRouter };
