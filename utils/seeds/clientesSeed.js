require("dotenv").config();

const Cliente = require("../../models/Cliente");

const clientes = [
  {
    nombre: "Pepe",
    apellidos: "Isidorian",
    email: "pepedorian@gmail.com",
    dni: "123456789-A",
    telefono: 666111222,
    direccion: "Calle de la Piruleta, nº 5",
    fechaDeNacimiento: new Date(1987, 8, 13),
    estadoCivilId: 1,
  },
  {
    nombre: "Lola",
    apellidos: "Poseidonia",
    email: "lola_poseidonia@gmail.com",
    dni: "987654321-V",
    telefono: 666333444,
    direccion: "Calle del Mar, nº 1",
    fechaDeNacimiento: new Date(1994, 4, 20),
    estadoCivilId: 2,
  },
  {
    nombre: "Amancio",
    apellidos: "Angularoso",
    email: "amangular@gmail.com",
    dni: "456789123-G",
    telefono: 666777999,
    direccion: "Calle de la Directiva, nº 5",
    fechaDeNacimiento: new Date(1972, 10, 3),
    estadoCivilId: 4,
  },
];

Cliente.bulkCreate(clientes).then(() =>
  console.log("✨ ¡Los CLIENTES se han cargado correctamente! ✨")
);
