require("dotenv").config();

const EstadoCivil = require("../../models/EstadoCivil");

const estadosCiviles = [
  {
    estadoCivilDesc: "soltero",
  },
  {
    estadoCivilDesc: "casado",
  },
  {
    estadoCivilDesc: "viudo",
  },
  {
    estadoCivilDesc: "divorciado",
  },
  {
    estadoCivilDesc: "desconocido",
  },
];

EstadoCivil.bulkCreate(estadosCiviles).then(() =>
  console.log("✨ ¡Los ESTADOS CIVILES se han cargado correctamente! ✨")
);
