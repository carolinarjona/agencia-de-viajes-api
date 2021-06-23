const tipoDeViajeRepository = require("../repositories/tipoDeViajeRepository");

exports.getAllTipoDeViaje = async () => {
  const tiposDeViaje = await tipoDeViajeRepository.findAllTipoDeViajes();
  return tiposDeViaje;
};

exports.getTipoDeViaje = async (id) => {
  const tipoDeViaje = await tipoDeViajeRepository.findTipoDeViajeById(id);
  return tipoDeViaje;
};

exports.createTipoDeViaje = async (tipoDeViaje) => {
  await tipoDeViajeRepository.insertTipoDeViaje(tipoDeViaje);
};

exports.editTipoDeViaje = async (tipoDeViajeData, id) => {
  await tipoDeViajeRepository.editTipoDeViajeById(tipoDeViajeData, id);
};

exports.deleteTipoDeViaje = async (id) => {
  await tipoDeViajeRepository.deleteTipoDeViajeById(id);
};
