import { Router } from "express";
import { getRepository } from "typeorm";
import { Caso } from "../entity/Caso";
import { CasoInstancia } from "../entity/CasoInstancia";

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

router.get("/caso", async (req, res) => {
  const casoRepository = getRepository(Caso);
  const casos = await casoRepository.find({ relations: ["casoInstancias"] });
  res.status(200).json(casos);
});

router.post("/instancia", async (req, res) => {
  const casoRepository = getRepository(Caso);
  const casoInstanciaRepository = getRepository(CasoInstancia);

  const caso = await casoRepository.findOne({
    where: { numeroCaso: parseInt(req.body.numeroCaso) },
  });

  const ci = new CasoInstancia();
  ci.observaciones = req.body.observaciones;
  ci.caso = caso;

  const result = await casoInstanciaRepository.save(ci);
  res.status(201).json(result);
});

export { router as CasoRouter };
