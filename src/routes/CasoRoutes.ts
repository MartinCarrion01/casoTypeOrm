import { Router } from "express";
import { getRepository } from "typeorm";
import { Caso } from "../entity/Caso";

const router = Router();

router.post("/caso", async (req, res) => {
  const casoRepository = getRepository(Caso);
  const caso = new Caso();
  caso.numeroCaso = req.body.numeroCaso;
  caso.numeroCliente = req.body.numeroCliente;
  caso.observacionCaso = req.body.observacionCaso;
  const result = await casoRepository.save(caso);
  res.status(201).json(result);
});

export { router as CasoRouter };
