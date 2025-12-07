import { Router } from "express";
import { CategoryRouter } from "./category.routes";
import ProjectController from "../../controllers/project.controller";


const router = Router();

router.use('/categories', CategoryRouter);

router.post("/add", ProjectController.create);
router.patch("/update/:id", ProjectController.update);


export const ProjectRouter = router;