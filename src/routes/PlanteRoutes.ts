import { Router } from 'express';
import PlanteController from '../controllers/PlanteControllers';

// Utilisation d'un router
const planteRouter = Router();

// Nouvelle instance de la class PlanteController
const planteController = new PlanteController();

planteRouter.get('/', (req, res) => {
    planteController.getAllPlantes(req, res);
})

// Branchement du Router dans notre index.ts : on l'exporte pour que l'index.ts puisse l'utiliser.
export default planteRouter;