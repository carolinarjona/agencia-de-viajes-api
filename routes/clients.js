var express = require("express");
var router = express.Router();
const clienteService = require("../services/clienteService");

router.get("/", async (req, res) => {
  try {
    const clientes = await clienteService.getAllClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await clienteService.getCliente(id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    await clienteService.createCliente(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await clienteService.editCliente(req.body, id);
    const cliente = await clienteService.getCliente(id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await clienteService.deleteCliente(id);
    res.status(200).json({ deleted: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
