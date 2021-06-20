const dbAgenciaDeViajes = require("../config/dbAgenciaDeViajes");
const Viaje = require("../models/Viaje");
const TipoDeViaje = require("../models/TipoDeViaje");

const loadModels = () => {
  TipoDeViaje.hasMany(Viaje, {
    foreignKey: {
      allowNull: false,
    },
  });
  Viaje.belongsTo(TipoDeViaje);
};

dbAgenciaDeViajes.sync().then(() => console.log("Everything is ok 👌!"));

module.exports = loadModels;
