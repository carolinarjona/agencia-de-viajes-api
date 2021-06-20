require("dotenv").config();

const Viaje = require("../models/Viaje");

const viajes = [
  {
    nombre: "Aventura en la Sierra",
    TipoDeViajeId: 5,
    duracion: 7,
    destino: "Granada",
    plazas: 4,
    enOferta: true,
    estado: 2,
  },
  {
    nombre: "Camino en la Costa",
    TipoDeViajeId: 1,
    duracion: 5,
    destino: "Torremolinos",
    plazas: 5,
    enOferta: false,
    estado: 10,
  },
  {
    nombre: "Subida a la montaña",
    TipoDeViajeId: 5,
    duracion: 3,
    destino: "Pirineos",
    plazas: 3,
    enOferta: false,
    estado: 8,
  },
  {
    nombre: "Visita al Louvre",
    TipoDeViajeId: 6,
    duracion: 2,
    destino: "París",
    plazas: 4,
    enOferta: true,
    estado: 3,
  },
  {
    nombre: "Paseo por las Pirámides",
    TipoDeViajeId: 6,
    duracion: 4,
    destino: "Guiza",
    plazas: 6,
    enOferta: false,
    estado: 2,
  },
  {
    nombre: "Viaje imantado",
    TipoDeViajeId: 5,
    duracion: 6,
    destino: "Islas Bermudas",
    plazas: 3,
    enOferta: false,
    estado: 8,
  },
  {
    nombre: "Caminando en el Anfiteatro",
    TipoDeViajeId: 3,
    duracion: 2,
    destino: "Roma",
    plazas: 4,
    enOferta: true,
    estado: 1,
  },
];

Viaje.bulkCreate(viajes).then(() => console.log("Your viajes are loaded!"));
