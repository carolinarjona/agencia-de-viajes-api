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

exports.pagination = async ({ page, pageSize, sort }) => {
  const offset = pageSize * (page - 1);
  const limit = pageSize;

  let orderBy = "ASC";
  let sortBy = "createdAt";

  const order = [];

  if (sort) {
    sortBy = sort;
    if (sort.includes("-")) {
      orderBy = "DESC";
      sortBy = sort.replace("-", "");
    }
  }
  order.push([sortBy, orderBy]);

  return await Cliente.findAndCountAll({
    limit,
    offset,
    // order: [[sortBy, orderBy]],
    order,
    filterEstadoCivil,
  });
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

exports.updateCliente = async (clienteDetails, id) => {
  return await Cliente.update(clienteDetails, { where: { id } });
};
