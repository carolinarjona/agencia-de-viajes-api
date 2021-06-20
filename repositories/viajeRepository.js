const Viaje = require("../models/Viaje");

exports.findAllViajes = async () => {
  return await Viaje.findAll();
};

exports.findViajeById = async (id) => {
  return await Viaje.findOne({ where: { id } });
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
