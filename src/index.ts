import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { CasoRouter } from "./routes/CasoRoutes";

createConnection()
  .then(async (connection) => {
    const app = express();

    app.use(express.json());
    app.use(CasoRouter);

    // start express server
    app.listen(3001, () => console.log("Escuchando"));
  })
  .catch((error) => console.log(error));
