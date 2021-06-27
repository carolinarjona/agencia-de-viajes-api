require("dotenv").config();

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var viajesRouter = require("./routes/viajes");
var clientsRouter = require("./routes/clients");
var estadoCivilRouter = require("./routes/estadoCivil");
var tiposDeViajeRouter = require("./routes/tipoDeViajes");
const loadModels = require("./models/relationship");
const tokenValidation = require("./middleware/tokenValidation");

var app = express();

loadModels();

const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(tokenValidation);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/viajes/tiposDeViaje", tiposDeViajeRouter);
app.use("/viajes", viajesRouter);
app.use("/clientes", clientsRouter);
app.use("/usuarios", usersRouter);
app.use("/estadosCiviles", estadoCivilRouter);

module.exports = app;
