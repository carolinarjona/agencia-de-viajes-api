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
  precio: {
    type: DataTypes.DECIMAL(8, 2),
  },
  enOferta: {
    type: DataTypes.BOOLEAN,
  },
  estado: {
    type: DataTypes.INTEGER,
  },
  fechaSalida: {
    type: DataTypes.DATE,
  },
  TipoDeViajeId: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Viaje;
