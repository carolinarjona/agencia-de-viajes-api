const clienteRepository = require("../repositories/clienteRepository");

exports.getAllClientes = async () => {
  const clientes = await clienteRepository.findAllClientes();
  return clientes;
};

exports.getCliente = async (id) => {
  const cliente = await clienteRepository.findClienteById(id);
  return cliente;
};

exports.createCliente = async (cliente) => {
  delete cliente.id;

  await clienteRepository.insertCliente(cliente);
};

exports.editCliente = async (clienteData, id) => {
  await clienteRepository.editCliente(clienteData, id);
};

exports.deleteCliente = async (id) => {
  await clienteRepository.deleteCliente(id);
};
