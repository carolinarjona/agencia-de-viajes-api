const estadoCivilRepository = require("../repositories/estadoCivilRepository");

exports.getAllEstadosCiviles = async () => {
  const estadosCiviles = await estadoCivilRepository.findAllEstadosCivil();
  return estadosCiviles;
};

exports.getEstadoCivil = async (id) => {
  const estadoCivil = await estadoCivilRepository.findEstadoCivilById(id);
  return estadoCivil;
};

exports.createEstadoCivil = async (estadoCivil) => {
  await estadoCivilRepository.insertEstadoCivil(estadoCivil);
};

exports.editEstadoCivil = async (estadoCivilData, id) => {
  await estadoCivilRepository.editEstadoCivil(estadoCivilData, id);
};

exports.deleteEstadoCivil = async (id) => {
  await estadoCivilRepository.deleteEstadoCivil(id);
};
