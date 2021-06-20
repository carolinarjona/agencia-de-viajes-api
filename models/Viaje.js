const { DataTypes } = require("sequelize");
const dbAgenciaDeViajes = require("../config/dbAgenciaDeViajes");

const Viaje = dbAgenciaDeViajes.define("Viaje", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  duracion: {
    type: DataTypes.INTEGER,
  },
  destino: {
    type: DataTypes.STRING,
  },
  plazas: {
    type: DataTypes.INTEGER,
  },
  enOferta: {
    type: DataTypes.BOOLEAN,
  },
  estado: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Viaje;
