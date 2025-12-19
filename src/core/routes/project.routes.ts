import { Router } from 'express';
import { ProjectController } from '../controllers/project.controller.js';


const router = Router();
const controller = new ProjectController();

router.get('/all', controller.getAll);


export const ProjectRouter = router;