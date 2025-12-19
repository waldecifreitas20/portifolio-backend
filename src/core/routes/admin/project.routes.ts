import { Router } from 'express';
import { CategoryRouter } from './category.routes.js';
import { ProjectController } from '../../controllers/project.controller.js';
import { AdminMiddleware } from '../../middlewares/admin.middleware.js';


const router = Router();
const controller = new ProjectController();
const adminMiddleware = new AdminMiddleware();

router.use('/categories', CategoryRouter);

router.post('/add', adminMiddleware.checkCredentials, controller.create);
router.delete('/delete/:id', controller.delete);


export const AdminProjectRouter = router;