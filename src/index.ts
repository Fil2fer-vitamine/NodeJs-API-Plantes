import express, { application } from "express";
import cors from "cors";

const port = 8080;

const app = express();
app.use(express.json); //On paramètre la possibilité de récupérer des infos dans un body en format .json
app.use(
  cors({
    origin: "*", // 'http://localhost:3000'
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// On paramètre pour notre API pour qu'on puisse faire des requêtes dessus.

// Raccordement de l'API sur un port :
application.listen(8080, () => {
  console.log(
    `L'api est en route sur l'adresse localhost:${port} - En cours d'utilisation ...`
  );
});
