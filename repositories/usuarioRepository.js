const Usuario = require("../models/Usuario");

exports.findAllUsuarios = async () => {
  return await Usuario.findAll();
};

exports.findUsuarioById = async (id) => {
  return await Usuario.findByPk(id);
};

exports.findUsuarioWithPasswordByEmail = async (email) => {
  return await Usuario.scope("withPassword").findOne({ where: { email } });
};

exports.insertUsuario = async (usuario) => {
  return await Usuario.create(usuario);
};

exports.deleteUsuario = async (id) => {
  return await Usuario.destroy({ where: { id } });
};

exports.updateUsuario = async (usuarioData, id) => {
  return await Usuario.update(usuarioData, { where: { id } });
};
