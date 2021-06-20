require("dotenv").config();
const TipoDeViaje = require("../models/TipoDeViaje");

const tiposDeViaje = [
  {
    nombre: "Familiar",
    descripcion:
      "Con este tipo de viajes podrá disfrutar toda la familia, ya que se incluyen actividades para todas las edades.",
  },
  {
    nombre: "Trabajo",
    descripcion:
      "Con este tipo de viaje nos adaptamos a las necesidades de tu empresa.",
  },
  {
    nombre: "Luna de miel",
    descripcion:
      "Con este tipo de viaje disfrutaréis de la mejor escapada en pareja.",
  },
  {
    nombre: "AhoraMismoPorFavor",
    descripcion:
      "Con este tipo de viaje ponemos a tu disposición viajes rápidos y cortos para que todo aquel que lo necesite pueda realizar una escapada",
  },
  {
    nombre: "Aventura",
    descripcion:
      "Con este tipo de viaje podrás divertirte y disfrutar de un sinfín de actividades.",
  },
  {
    nombre: "Cultural",
    descripcion:
      "Con este tipo de viaje podrás disfrutar de actividades culturales visitando museos y lugares emblemáticos del lugar.",
  },
  {
    nombre: "Deluxury",
    descripcion: "Con este tipo de viaje disfrutarás de un lujo inimaginable.",
  },
  {
    nombre: "Gastronómico",
    descripcion:
      "Con este tipo de viaje conocerás la gastronomía del lugar y aprenderás diversas recetas.",
  },
];

TipoDeViaje.bulkCreate(tiposDeViaje).then(() =>
  console.log("Your tipos de viajes are loaded!")
);
