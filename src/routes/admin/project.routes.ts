import { Router } from "express";
import ProjectController from "../../controllers/project.controllers";


const router = Router();

router.post("/add", ProjectController.create);
router.patch("/update/:id", ProjectController.update);


export const ProjectRouter = router;