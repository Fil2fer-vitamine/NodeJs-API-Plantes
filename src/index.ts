import express from "express";
import cors from "cors";
import planteRouter from "./routes/PlanteRoutes";

const app = express(); // utilisation des possibilités de express.

const port = 8080;

app.use(express.json()); //On paramètre la possibilité de récupérer des infos dans un body en format .json      -->Fix bug non liaison avec Postman : mise des () dans (express.json) <--
app.use(
  cors({
    origin: "*", // 'http://localhost:3000'
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// On paramètre pour notre API pour qu'on puisse faire des requêtes dessus.

// Création d'un raccourci d'URL
app.use("/api/plantes", planteRouter);

// Raccordement de l'API sur un port :
app.listen(port, () => {
  console.log(
    `L'api est en route sur l'adresse http://localhost:${port} - En cours d'utilisation !!!`
  );
});
