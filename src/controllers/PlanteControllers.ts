import { Request, Response } from "express";

// Création d'une classe
class PlanteController {
  constructor() {} // Proriétés d'un constructor - Il n'y aura pas de paramètre à l'intérieur.
  // Méthodes à définir - Pour getAllPlantes, il nous faut un package de méthodes ... et non de propriétés ... C'est une autre utilisation des classes.
  getAllPlantes(req: Request, res: Response) {
    res.send({ status: "OK", date: new Date(), data: [] });
  }
}

export default PlanteController;
