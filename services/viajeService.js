const ViajeRepository = require("../repositories/ViajeRepository");

exports.getAllViajes = async () => {
  const viajes = await ViajeRepository.findAllViajes();
  return viajes;
};

exports.getViaje = async (id) => {
  const viaje = await ViajeRepository.findViajeById(id);
  return viaje;
};

exports.createViaje = async (viaje) => {
  const viajeCreated = await ViajeRepository.insertViaje(viaje);
  return viajeCreated;
};

exports.editViaje = async (viajeData, id) => {
  await ViajeRepository.editViajeById(viajeData, id);
};

exports.deleteViaje = async (id) => {
  await ViajeRepository.deleteViajeById(id);
};
