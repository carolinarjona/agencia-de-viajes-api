const usuarioRepository = require("../repositories/usuarioRepository");
const encryptPassword = require("../utils/encryptPassword");
const { generateToken } = require("../services/jwtService");

exports.signup = async (usuarioDetails) => {
  const encryptedPassword = await encryptPassword(usuarioDetails.password);
  await usuarioRepository.insertUsuario({
    ...usuarioDetails,
    password: encryptedPassword,
  });
};

exports.login = async (email, password) => {
  if (!email || !password) {
    throw new Error();
  }

  const user = await usuarioRepository.findUsuarioWithPasswordByEmail(email);
  if (!user) throw new Error();

  const encryptedPassword = await encryptPassword(password);
  if (user.password !== encryptedPassword) {
    throw new Error();
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    rol: user.rol,
  });

  const result = {
    token: token,
    id: user.id,
    email: user.email,
    rol: user.rol,
    nombre: user.nombre,
  };

  return result;
};

exports.getAllProfiles = async () => {
  return await usuarioRepository.findAllUsuarios();
};

exports.getProfile = async (id) => {
  if (!id) throw new Error();
  const user = await usuarioRepository.findUsuarioById(id);
  return user.toJSON();
};

exports.editProfile = async ({ id }, userDetails) => {
  if (!id) throw new Error();
  await usuarioRepository.updateUsuario(userDetails, { where: { id } });
};

exports.deleteUserById = async (id, user) => {
  if (!id) throw new Error();
  if (id !== user.id) throw new Error();
  await usuarioRepository.deleteUsuario(id);
};
