const Cliente = require("../models/Cliente");
const EstadoCivil = require("../models/EstadoCivil");

const filterEstadoCivil = {
  include: [
    {
      model: EstadoCivil,
      attributes: ["estadoCivilDesc"],
    },
  ],
};

exports.findAllClientes = async () => {
  return await Cliente.findAll(filterEstadoCivil);
};

exports.findClienteById = async (id) => {
  return await Cliente.findByPk(id, filterEstadoCivil);
};

exports.insertCliente = async (cliente) => {
  return await Cliente.create(cliente);
};

exports.deleteCliente = async (id) => {
  return await Cliente.destroy({ where: { id } });
};

exports.updateCliente = async (id, clienteDetails) => {
  return await Cliente.update(clienteDetails, { where: { id } });
};
