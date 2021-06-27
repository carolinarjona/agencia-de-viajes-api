const dbAgenciaDeViajes = require("../config/dbAgenciaDeViajes");
const Viaje = require("../models/Viaje");
const TipoDeViaje = require("../models/TipoDeViaje");
const EstadoCivil = require("../models/EstadoCivil");
const Cliente = require("../models/Cliente");
const Usuario = require("../models/Usuario");

const loadModels = () => {
  TipoDeViaje.hasMany(Viaje, {
    foreignKey: {
      allowNull: false,
    },
  });
  Viaje.belongsTo(TipoDeViaje);
  EstadoCivil.hasMany(Cliente, {
    foreignKey: {
      allowNull: false,
    },
  });
  Cliente.belongsTo(EstadoCivil);
};

dbAgenciaDeViajes.sync().then(() => console.log("Everything is ok 👌!"));

module.exports = loadModels;
