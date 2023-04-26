//-------------------- SETTINGS --------------------------------

const express = require("express");
const v1CoursesRouter = require("./v1/routes/courses.routes")
const v1StudentsRouter = require("./v1/routes/students.routes")
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

// app.use(require('./routes/admins.routes'));

// app.use(require('./routes/students.routes'));

// app.use(require('./routes/courses.routes'));

// app.use(require('./routes/survey.routes'));

// app.use(require('./routes/events.routes'));

app.use("/api/v1/courses",v1CoursesRouter);
app.use("/api/v1/students",v1StudentsRouter);

//-------------------- START SERVER ------------------------------------
app.listen(PORT, () =>
  console.log(`¡Aplicación escuchando en el puerto ${PORT}!`),
);