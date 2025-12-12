import { AdminMiddleware } from '../../middlewares/admin.middleware';
import { Router } from 'express';
import { CategoryController } from '../../controllers/category.controller';


const router = Router();
const controller = new CategoryController();
const middlewares = new AdminMiddleware();

router.post('/add',
  middlewares.checkCredentials,
  controller.create
);
router.delete('/delete/:id',
  middlewares.checkCredentials,
  controller.remove
);


export const CategoryRouter = router;

