import Plante from "../models/Plante";
import Book from "../models/Plante";

class PlanteService {
  private listPlantes: Plante[] = [
    {
      name: "plante1",
      unitprice_ati: 12,
      quantity: 3,
      category: "coucou",
      rating: 2,
      url_picture: "coucou",
    },
    {
      name: "plante2",
      unitprice_ati: 122,
      quantity: 32,
      category: "coucou2",
      rating: 22,
      url_picture: "coucou2",
    },
  ];
  async getAllPlantes(): Promise<Plante[]> {
    console.log("PlanteServices - GET / - en fonction sur localhost:8080");
    return this.listPlantes;
  }
  
  async getOnePlanteById(): Promise<Plante> {
    console.log("PlanteServices - GET / - en fonction sur localhost:8080");
    return this.listPlantes;
  }
  
  async postOnePlante(): Promise<Plante> {
    console.log("PlanteServices - POST / - en fonction sur localhost:8080");
    return this.listPlantes;
  }
  
  async putOnePlanteById(): Promise<Plante> {
    console.log("PlanteServices - PUT / - en fonction sur localhost:8080");
    return this.listPlantes;
  }
  
  async deleteOnePlanteById(): Promise<Plante> {
    console.log("PlanteServices - DELETE / - en fonction sur localhost:8080");
    return this.listPlantes;
  }
  
}
export default PlanteService;

// La patate chaude, on ne la fait pas passer dans le Service --> effacement de la (req: Request, res: Response) --> Tout s'arrête au controller.
// Controller va gérer la requête et va transmettre au service. C'est le Controller qui va générer la réponse : Le service n'a pas besoin des objets req: Request, res: Response.
