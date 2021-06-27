var express = require("express");
var router = express.Router();
const estadoCivilService = require("../services/estadoCivilService");

router.get("/", async (req, res) => {
  try {
    const estadosCiviles = await estadoCivilService.getAllEstadosCiviles();
    res.status(200).json(estadosCiviles);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const estadoCivil = await estadoCivilService.getEstadoCivil(id);
    res.status(200).json(estadoCivil);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    await estadoCivilService.createEstadoCivil(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await estadoCivilService.editEstadoCivil(req.body, id);
    const estadoCivil = await estadoCivilService.getEstadoCivil(id);
    res.status(200).json(estadoCivil);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await estadoCivilService.deleteEstadoCivil(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
