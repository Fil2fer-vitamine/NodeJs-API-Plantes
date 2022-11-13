class PlanteService {
  async getAllPlantes(): Promise<any[]> {
    console.log("PlanteServices - GET / - en fonction sur localhost:8080");
    return ["Données", "Bouchon", "Pour test"];
  }
}
export default PlanteService;

// La patate chaude, on ne la fait pas passer dans le Service --> effacement de la (req: Request, res: Response) --> Tout s'arrête au controller.
// Controller va gérer la requête et va transmettre au service. C'est le Controller qui va générer la réponse : Le service n'a pas besoin des objets req: Request, res: Response.
