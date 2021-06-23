require("dotenv").config();
const TipoDeViaje = require("../models/TipoDeViaje");

const tiposDeViaje = [
  {
    nombre: "Familiar",
  },
  {
    nombre: "Trabajo",
  },
  {
    nombre: "Luna de miel",
  },
  {
    nombre: "AhoraMismoPorFavor",
  },
  {
    nombre: "Aventura",
  },
  {
    nombre: "Cultural",
  },
  {
    nombre: "Deluxury",
  },
  {
    nombre: "Gastronómico",
  },
];

TipoDeViaje.bulkCreate(tiposDeViaje).then(() =>
  console.log("Your tipos de viajes are loaded!")
);
