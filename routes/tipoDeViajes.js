var express = require("express");
var router = express.Router();
const tipoDeViajeService = require("../services/tipoDeViajeService");

router.get("/", async (req, res) => {
  try {
    const tiposDeViaje = await tipoDeViajeService.getAllTipoDeViaje();
    res.status(200).json(tiposDeViaje);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tipoDeViaje = await tipoDeViajeService.getTipoDeViaje(id);
    res.status(200).json(tipoDeViaje);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    await tipoDeViajeService.createTipoDeViaje(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tipoDeViajeService.editTipoDeViaje(req.body, id);
    const tipoDeViaje = await tipoDeViajeService.getTipoDeViaje(id);
    res.status(200).json(tipoDeViaje);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tipoDeViajeService.deleteTipoDeViaje(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
