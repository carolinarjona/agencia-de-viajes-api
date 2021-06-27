const Viaje = require("../models/Viaje");
const { Op } = require("sequelize");

exports.findAllViajes = async () => {
  return await Viaje.findAll();
};

exports.findViajeById = async (id) => {
  return await Viaje.findOne({ where: { id } });
};

exports.searchTravel = async (filtro) => {
  const { tipoDeViajeId, nombre, destino } = filtro;
  const where = {
    tipoDeViajeId: tipoDeViajeId ? tipoDeViajeId : { [Op.like]: `%` },
    nombre: nombre ? { [Op.like]: `%${nombre}%` } : { [Op.like]: `%` },
    destino: destino ? { [Op.like]: `%${destino}%` } : { [Op.like]: `%` },
  };
  return await Viaje.findAll({ where });
};

exports.searchTravel = async (filtro) => {
  const { tipoDeViajeId, nombre, destino } = filtro;
  const where = {};

  if (tipoDeViajeId) {
    where.tipoDeViajeId = tipoDeViajeId;
  }

  if (nombre) {
    where.nombre = { [Op.like]: `%${nombre}%` };
  }

  if (destino) {
    where.destino = { [Op.like]: `%${destino}%` };
  }

  return await Viaje.findAll({ where });
};

exports.insertViaje = async (viaje) => {
  return await Viaje.create(viaje);
};

exports.deleteViajeById = async (id) => {
  return await Viaje.destroy({ where: { id } });
};

exports.editViajeById = async (viajeData, id) => {
  return await Viaje.update(viajeData, { where: { id } });
};
