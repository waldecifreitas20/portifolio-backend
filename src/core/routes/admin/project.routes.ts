import { Router } from 'express';
import { CategoryRouter } from './category.routes';
import { ProjectController } from '../../controllers/project.controller';
import { AdminMiddleware } from '../../middlewares/admin.middleware';


const router = Router();
const controller = new ProjectController();
const adminMiddleware = new AdminMiddleware();

router.use('/categories', CategoryRouter);

router.post('/add', adminMiddleware.checkCredentials, controller.create);
router.patch('/update/:id', controller.update);


export const ProjectRouter = router;