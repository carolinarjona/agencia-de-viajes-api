const TipoDeViaje = require("../models/TipoDeViaje");

exports.findAllTipoDeViajes = async () => {
  return await TipoDeViaje.findAll();
};

exports.findTipoDeViajeById = async (id) => {
  return await TipoDeViaje.findOne({ where: { id } });
};

exports.insertTipoDeViaje = async (tipoDeViaje) => {
  return await TipoDeViaje.create(tipoDeViaje);
};

exports.deleteTipoDeViajeById = async (id) => {
  return await TipoDeViaje.destroy({ where: { id } });
};

exports.editTipoDeViajeById = async (tipoDeViajeData, id) => {
  return await TipoDeViaje.update(tipoDeViajeData, { where: { id } });
};
