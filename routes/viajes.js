var express = require("express");
const { IsTokenValid } = require("../middleware/acessValidation");
var router = express.Router();
const viajeService = require("../services/viajeService");

router.get("/", IsTokenValid(), async (req, res) => {
  try {
    const viajes = await viajeService.getAllViajes();
    res.status(200).json(viajes);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.get(":pageSize?:page?:sort?", async (req, res) => {
  try {
    const pagination = await viajeService.getPagination(req.query);
    res.status(200).json(pagination);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.get(
  "/search:tipoDeViajeId?:nombre?:destino?",
  async (req, res, next) => {
    try {
      console.log(req.query);
      const viajes = await viajeService.search(req.query);
      res.status(200).json(viajes);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
);

router.get("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    const viaje = await viajeService.getViaje(id);
    res.status(200).json(viaje);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.post("/", IsTokenValid(), async (req, res) => {
  try {
    const viaje = await viajeService.createViaje(req.body);
    res.status(201).json(viaje);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.put("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    await viajeService.editViaje(req.body, id);
    const viaje = await viajeService.getViaje(id);
    res.status(200).json(viaje);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.delete("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    await viajeService.deleteViaje(id);
    res.status(200).json({ deleted: true });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;
