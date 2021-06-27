const viajeRepository = require("../repositories/ViajeRepository");

exports.getAllViajes = async () => {
  const viajes = await viajeRepository.findAllViajes();
  return viajes;
};

exports.getViaje = async (id) => {
  const viaje = await viajeRepository.findViajeById(id);
  return viaje;
};

exports.search = async (filter) => {
  return await viajeRepository.searchTravel(filter);
};

exports.createViaje = async (viaje) => {
  delete viaje.id;

  const viajeCreated = await viajeRepository.insertViaje(viaje);
  return viajeCreated;
};

exports.editViaje = async (viajeData, id) => {
  await viajeRepository.editViajeById(viajeData, id);
};

exports.deleteViaje = async (id) => {
  await viajeRepository.deleteViajeById(id);
};
