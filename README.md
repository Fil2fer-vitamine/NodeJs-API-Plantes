# A-Z Node Api Books

To start you have to type this line to install dependencies

(Pour commencer tu dois écrire cette ligne de commande dans ton bash pour installer les dépendances)

```bash
npm i
```

Dependencies :

- express
- cors
- typeorm
- reflect-metadata
- pg

Dev dependencies :

- @types/express
- typescript
- ts-node
- nodemon
- @types/cors
- @types/node

## Info init project

You **don't have to do this**, I already executed it while project initialization.

(Tu **n'as pas à executer**, c'est ce que j'ai fais pour initialiser le projet)

Initialization of `.git` hidden folder

```bash
git init
```

Initialization of `.gitignore` file and add node_modules in it

```bash
echo node_modules >> .gitignore
echo dist >> .gitignore
```

Connect my local repo and remote repo by url ([REPO_URL] to change with yours)

```bash
git remote add origin [REPO_URL]
```

Initialization of `package.json` file

```bash
npm init -y
```

Initialization of `tsconfig.json` file

```bash
tsc --init
```

and in the file `tsconfig.json`, and uncomment/modify this option `"outDir": "./dist"` (l.52)

---

Installation of dependencies :

```bash
npm i express cors typeorm reflect-metadata pg
```

Installation of dev dependencies :

```bash
npm i -D typescript @types/express ts-node nodemon @types/cors @types/node
```

## Create database

Dans un shell PSQL :

```sql
CREATE DATABASE library;
```

Ensuite je me connecte à cette base de données avec `\c library` et je créer la table book :

```sql
CREATE TABLE book(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255)
);
```

On insère quelques données de test :

```sql
INSERT INTO book (title) VALUES ('The Hobbit'), ('The Lord of the Rings');
```

Création des fichiers dans src:

- PlantesRoutes.ts dans routes -- liaison entre index.ts et PlantesRoutes.ts
- PlantesController.ts dans controllers -- liaison entre PlantesRoute.ts et PlantesController.ts
- PlantesServices.ts dans services -- liaison entre PlantesServices.ts et PlantesController.ts
- Création de la data-source.ts dans src pour y configurer la base de données ... la data-source fait appel à ORM
  --> installation de typeorm avec la ligne de code donnée par jérémy pour le Vscode
  READ.md - A-Z_node-api-book-main : npm i express cors typeorm reflect-metadata pg
  --> installation de dev dependencies avec la ligne de code donnée par jérémy pour le Vscode
  READ.md - npm i -D typescript @types/express ts-node nodemon @types/cors @types/node

- installation de typeorm et reflect-metadata : npm install typeorm reflect-metadata --save
- installation de @types/node dans les Dependancies : npm install @types/node --save-dev

---

Pour que le README;md soit à jour, les lignes de codes à retenir sont :

- npm i express cors typeorm reflect-metadata pg
- npm i -D typescript @types/express ts-node nodemon @types/cors @types/node

---

Nous suivons les recommandations de la page https://typeorm.io/

TypeScript configuration
Also, make sure you are using TypeScript version 4.5 or higher, and you have enabled the following settings in tsconfig.json:
"emitDecoratorMetadata": true,
"experimentalDecorators": true,

---

Poursuite de la recommandation de la page https://typeorm.io/

- Création de la page data-source.ts que l'on doit mettre dans le fichier src.
- Copie du code suivant dedans :
  export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [Post, Category],
  subscribers: [],
  migrations: [],
  })

---
