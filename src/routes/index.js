import express from "express";
import * as participantes from "../controller/participanteController.js";
import * as categorias from "../controller/categoriaController.js"
import * as planos from "../controller/planosController.js"
import * as formReuniao from "../controller/formularioReuniaoController.js"
import bodyParser from "body-parser";

var jsonParser = bodyParser.json();
const router = express.Router();

router.get("/participante", participantes.buscarTodosParticipantes);
router.get("/participante/:id", jsonParser, participantes.buscarParticipantePorID);
router.post("/participante", jsonParser, participantes.criarParticipante);
router.put("/participante/:id", jsonParser, participantes.atualizaParticipante);
router.delete("/participante/:id", participantes.deletaParticipante)

router.get('/categorias', categorias.buscarTodasCategorias);
router.get("/categorias/:id", jsonParser, categorias.buscarCategoriaPorID);
router.post("/categorias", jsonParser, categorias.criarCategoria);
router.put("/categorias/:id", jsonParser, categorias.atualizaCategoria);
router.delete("/categorias/:id", categorias.deletaCategoria);

router.get('/planos', planos.buscarTodosPlanos);
router.get("/planos/:id", jsonParser, planos.buscarPlanoPorID);
router.post("/planos", jsonParser, planos.criarPlano);
router.put("/planos/:id", jsonParser, planos.atualizaPlano);
router.delete("/planos/:id", planos.deletaPlano);

router.get('/reunioes', formReuniao.buscaTodosFormulariosReunioes);
router.get("/reunioes/:id",jsonParser,  formReuniao.buscarFormularioReuniaoPorId);
router.post("/reunioes",jsonParser,  formReuniao.criarFormularioReuniao);
router.put("/reunioes/:id", jsonParser, formReuniao.atualizarFormularioReuniao);



export default router;