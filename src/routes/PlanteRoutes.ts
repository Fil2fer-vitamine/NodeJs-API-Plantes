import { Router } from "express";
import PlanteController from "../controllers/PlanteControllers";

// Utilisation d'un router
const planteRouter = Router();

// Nouvelle instance de la class PlanteController
const planteController = new PlanteController();

planteRouter.get("/", (req, res) => {
  console.log("PlanteRouter - GET / - en fonction sur localhost:8080");
  planteController.getAllPlantes(req, res);
});

planteRouter.get("/", (req, res) => {
  console.log("PlanteRouter - GET / - en fonction sur localhost:8080");
  planteController.getOnePlante(req, res);
});

planteRouter.post("/", (req, res) => {
  console.log("PlanteRouter - POST / - en fonction sur localhost:8080");
  planteController.postOnePlante(req, res);
});

planteRouter.put("/", (req, res) => {
  console.log("PlanteRouter - PUT / - en fonction sur localhost:8080");
  planteController.putOnePlanteById(req, res);
});

planteRouter.delete("/", (req, res) => {
  console.log("PlanteRouter - DELETE / - en fonction sur localhost:8080");
  planteController.deleteOnePlanteById(req, res);
});

// 'req' et 'res' sont deux gros objets où il y a plein de choses à l'intérieur ... Quand une requête 'req' arrive, 'express' l'associe à un objet 'res' (réponse) qui sera utile pour renvoyer des informations ou pour renvoyer des erreurs ...

// Branchement du Router dans notre index.ts : on l'exporte pour que l'index.ts puisse l'utiliser.
export default planteRouter;
