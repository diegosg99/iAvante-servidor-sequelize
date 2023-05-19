//-------------------- SETTINGS --------------------------------

const express = require("express");
const v1CoursesRouter = require("./v1/routes/courses.routes")
const v1StudentsRouter = require("./v1/routes/students.routes")
const v1AdminsRouter = require("./v1/routes/admins.routes")
const v1SurveysRouter = require("./v1/routes/surveys.routes")
const v1InventaryRouter = require("./v1/routes/inventary.routes")
//const v1EventsRouter = require("./v1/routes/events.routes")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const morgan = require('morgan');
const cors = require("cors");
require('dotenv').config()

const app = express();

let PORT;
process.env.STATUS === 'production' 
? (PORT = process.env.PROD_PORT)
: (PORT = process.env.DEV_PORT);

app.use(express.json({limit: '500mb'}));
app.use(cors());
app.use(morgan('dev'));

//-------------------- ROUTES -------------------------------------------

app.use("/api/v1/courses",v1CoursesRouter);
app.use("/api/v1/students",v1StudentsRouter);
app.use("/api/v1/admins",v1AdminsRouter);
app.use("/api/v1/surveys",v1SurveysRouter);
app.use("/api/v1/inventary",v1InventaryRouter);
////app.use("/api/v1/events",v1EventsRouter);

//-------------------- START SERVER ------------------------------------
app.listen(PORT, () =>
  console.log(`¡Aplicación escuchando en el puerto ${PORT}!`),
);