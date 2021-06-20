var express = require("express");
var router = express.Router();
const viajeService = require("../services/viajeService");

router.get("/", async (req, res) => {
  try {
    const viajes = await viajeService.getAllViajes();
    res.status(200).json(viajes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const viaje = await viajeService.getViaje(id);
    res.status(200).json(viaje);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const viaje = await viajeService.createViaje(req.body);
    res.status(201).json(viaje);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await viajeService.editViaje(req.body, id);
    const viaje = await viajeService.getViaje(id);
    res.status(200).json(viaje);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await viajeService.deleteViaje(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
