var express = require("express");
var router = express.Router();
const { IsTokenValid } = require("../middleware/acessValidation");
const usuarioService = require("../services/usuarioService");

// const multer = require("../middleware/multer");

router.get("/", IsTokenValid(), async (req, res) => {
  try {
    const users = await usuarioService.getAllProfiles();
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.get("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usuarioService.getProfile(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    await usuarioService.signup(req.body);
    res.sendStatus(201);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usuarioService.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.put("/", IsTokenValid(), async (req, res) => {
  try {
    await usuarioService.editProfile(req.body);
    res.sendStatus(204);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.delete("/:id", IsTokenValid(), async (req, res) => {
  try {
    const { id } = req.params;
    await usuarioService.deleteUserById(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;
