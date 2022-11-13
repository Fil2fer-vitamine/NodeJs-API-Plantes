import { Router } from 'express';

// Utilisation d'un router
const planteRouter = Router();

planteRouter.get('/', (req, res) => {
    
})

// Branchement du Router dans notre index.ts : on l'exporte pour que l'index.ts puisse l'utiliser.
export default planteRouter;