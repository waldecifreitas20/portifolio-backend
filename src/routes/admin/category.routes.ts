import { Router } from "express";
import CategoryController from "../../controllers/category.controller";
import { AdminMiddlewares } from "../../middlewares/admin.middleware";


const router = Router();

router.post('/add',
  AdminMiddlewares.checkCredentials,
  CategoryController.create
);
router.delete('/delete/:id',
  AdminMiddlewares.checkCredentials,
  CategoryController.create
);


export const CategoryRouter = router;

