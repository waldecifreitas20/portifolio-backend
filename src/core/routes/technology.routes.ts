import { TechnologyController } from '../controllers/technology.controller.js';
import { Router } from 'express';


const router = Router();
const controller = new TechnologyController();

router.get('/all', controller.getAll);

export const TechnologyRouter = router;