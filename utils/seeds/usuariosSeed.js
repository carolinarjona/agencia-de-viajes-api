require("dotenv").config();

const Usuario = require("../../models/Usuario");

const usuarios = [
  {
    email: "hola@gmail.com",
    password: "1234",
    rol: "admin",
    nombre: "Holiwi",
  },
];

Usuario.bulkCreate(usuarios).then(() =>
  console.log("✨ ¡Los USUARIOS se han cargado correctamente! ✨")
);
