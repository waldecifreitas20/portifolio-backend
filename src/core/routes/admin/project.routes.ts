import { Router } from 'express';
import { CategoryRouter } from './category.routes';
import { ProjectController } from '../../controllers/project.controller';


const router = Router();
const controller = new ProjectController();

router.use('/categories', CategoryRouter);

router.post('/add', controller.create);
router.patch('/update/:id', controller.update);


export const ProjectRouter = router;