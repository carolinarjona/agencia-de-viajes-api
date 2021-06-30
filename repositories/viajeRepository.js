const Viaje = require("../models/Viaje");
const { Op } = require("sequelize");
const TipoDeViaje = require("../models/TipoDeViaje");

exports.findAllViajes = async () => {
  return await Viaje.findAll();
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

  return await Viaje.findAndCountAll({
    limit,
    offset,
    // order: [[sortBy, orderBy]],
    order,
    include: {
      model: TipoDeViaje,
      attributes: ["nombre"],
    },
  });
};

exports.findViajeById = async (id) => {
  return await Viaje.findOne({ where: { id } });
};

// exports.searchTravel = async (filtro) => {
//   const { tipoDeViajeId, nombre, destino } = filtro;
//   const where = {
//     tipoDeViajeId: tipoDeViajeId ? tipoDeViajeId : { [Op.like]: `%` },
//     nombre: nombre ? { [Op.like]: `%${nombre}%` } : { [Op.like]: `%` },
//     destino: destino ? { [Op.like]: `%${destino}%` } : { [Op.like]: `%` },
//   };
//   return await Viaje.findAll({ where });
// };

exports.searchTravel = async (filtro) => {
  const { tipoDeViajeId, nombre, destino } = filtro;
  const where = {};

  if (tipoDeViajeId) {
    where.tipoDeViajeId = tipoDeViajeId;
  }

  if (nombre) {
    where.nombre = { [Op.like]: `%${nombre}%` };
  }

  if (destino) {
    where.destino = { [Op.like]: `%${destino}%` };
  }

  return await Viaje.findAll({ where });
};

exports.insertViaje = async (viaje) => {
  return await Viaje.create(viaje);
};

exports.deleteViajeById = async (id) => {
  return await Viaje.destroy({ where: { id } });
};

exports.editViajeById = async (viajeData, id) => {
  return await Viaje.update(viajeData, { where: { id } });
};
