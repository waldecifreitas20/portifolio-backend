import { Router } from "express";
import { CategoryController } from "../../controllers/category.controller";
import { AdminMiddlewares } from "../../middlewares/admin.middleware";


const router = Router();
const controller = new CategoryController();


router.post('/add',
  AdminMiddlewares.checkCredentials,
  controller.create
);
router.delete('/delete/:id',
  AdminMiddlewares.checkCredentials,
  controller.remove
);


export const CategoryRouter = router;

