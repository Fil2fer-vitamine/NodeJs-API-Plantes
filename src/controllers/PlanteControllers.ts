import { Request, Response } from "express";
import PlanteService from "../services/PlanteServices";

// Création d'une classe
class PlanteController {
  constructor() {} // Proriétés d'un constructor - Il n'y aura pas de paramètre à l'intérieur.
  // Méthodes à définir - Pour getAllPlantes, il nous faut un package de méthodes ... et non de propriétés ... C'est une autre utilisation des classes.
  private planteService = new PlanteService();
  
  async getAllPlantes(req: Request, res: Response) {
    console.log("PlanteController - GET / - en fonction sur localhost:8080");
    const plantes = await this.planteService.getAllPlantes();
    res.send({ status: "OK", date: new Date(), data: plantes });
  }
  
  async getPlanteById(req: Request, res: Response) {
    console.log("PlanteController - GET / - en fonction sur localhost:8080");
    const plantes = await this.planteService.getPlanteById();
    res.send({ status: "OK", date: new Date(), data: plantes });
  }
  
  async postPlante(req: Request, res: Response) {
    console.log("PlanteController - POST / - en fonction sur localhost:8080");
    const plantes = await this.planteService.postPlante();
    res.send({ status: "OK", date: new Date(), data: plantes });
  }
  
  async putOnePlanteById(req: Request, res: Response) {
    console.log("PlanteController - PUT / - en fonction sur localhost:8080");
    const plantes = await this.planteService.putOnePlanteById();
    res.send({ status: "OK", date: new Date(), data: plantes });
  }
  
  async deleteOnePlanteById(req: Request, res: Response) {
    console.log("PlanteController - DELETE / - en fonction sur localhost:8080");
    const plantes = await this.planteService.deleteOnePlanteById();
    res.send({ status: "OK", date: new Date(), data: plantes });
  }
  
}

export default PlanteController;

// async représente une méthode qui sera effectuée dès que la requête parviendra ... ce n'est pas dans l'instant ...
// await maintient cette idée d'asychronisme ... on attend cette action ...
