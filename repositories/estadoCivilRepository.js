const EstadoCivil = require("../models/EstadoCivil");

exports.findAllEstadosCivil = async () => {
  return await EstadoCivil.findAll();
};

exports.findEstadoCivilById = async (id) => {
  return await EstadoCivil.findByPk(id);
};

exports.insertEstadoCivil = async (estadoCivil) => {
  return await EstadoCivil.create(estadoCivil);
};

exports.deleteEstadoCivil = async (id) => {
  return await EstadoCivil.destroy({ where: { id } });
};

exports.editEstadoCivil = async (estadoCivilData, id) => {
  return await EstadoCivil.update(estadoCivilData, { where: { id } });
};
