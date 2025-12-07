import { Router } from "express";
import CategoryController from "../../controllers/category.controller";


const router = Router();

router.post('/add', CategoryController.create);
router.delete('/delete/:id', CategoryController.create);


export const CategoryRouter = router;

