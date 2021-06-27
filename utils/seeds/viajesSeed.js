require("dotenv").config();

const Viaje = require("../../models/Viaje");

const viajes = [
  {
    nombre: "Aventura en la Sierra",
    tipoDeViajeId: 5,
    duracion: 7,
    destino: "Granada",
    plazas: 4,
    enOferta: true,
    estado: 2,
    precio: 510,
    fechaSalida: new Date(2021, 10, 3),
  },
  {
    nombre: "Camino en la Costa",
    tipoDeViajeId: 1,
    duracion: 5,
    destino: "Torremolinos",
    plazas: 5,
    enOferta: false,
    estado: 10,
    precio: 305,
    fechaSalida: new Date(2021, 8, 1),
  },
  {
    nombre: "Subida a la montaña",
    tipoDeViajeId: 5,
    duracion: 3,
    destino: "Pirineos",
    plazas: 3,
    enOferta: false,
    estado: 8,
    precio: 425,
    fechaSalida: new Date(2021, 11, 1),
  },
  {
    nombre: "Visita al Louvre",
    tipoDeViajeId: 6,
    duracion: 2,
    destino: "París",
    plazas: 4,
    enOferta: true,
    estado: 3,
    precio: 795,
    fechaSalida: new Date(2021, 9, 20),
  },
  {
    nombre: "Paseo por las Pirámides",
    tipoDeViajeId: 6,
    duracion: 4,
    destino: "Guiza",
    plazas: 6,
    enOferta: false,
    estado: 2,
    precio: 925,
    fechaSalida: new Date(2022, 3, 2),
  },
  {
    nombre: "Viaje imantado",
    tipoDeViajeId: 5,
    duracion: 6,
    destino: "Islas Bermudas",
    plazas: 3,
    enOferta: false,
    estado: 8,
    precio: 1230,
    fechaSalida: new Date(2021, 8, 1),
  },
  {
    nombre: "Caminando en el Anfiteatro",
    tipoDeViajeId: 3,
    duracion: 2,
    destino: "Roma",
    plazas: 4,
    enOferta: true,
    estado: 1,
    precio: 575,
    fechaSalida: new Date(2022, 1, 14),
  },
];

Viaje.bulkCreate(viajes).then(() =>
  console.log("✨ ¡Los VIAJES se han cargado correctamente! ✨")
);
